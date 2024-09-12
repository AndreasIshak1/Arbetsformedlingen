import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/Router";
import { useEffect, useReducer, useState } from "react";
import { AdContext } from "./context/AdContext";
import { getAllAds } from "./services/addService";
import { ActionType, AdReducer } from "./reducers/buttonReducer";
import { DispatchContext } from "./context/DispatchContext";

function App() {
  const [ads, dispatch] = useReducer(AdReducer, {
    hits: [],
    savedAds: JSON.parse(localStorage.getItem("savedList") || "[]"),
    loader: false,
  });

  useEffect(() => {
    dispatch({
      type: ActionType.SHOWSPINNER,
      payload: "1",
    });
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          getApi(latitude, longitude);
        });
      } else {
        getApi(59.3305346, 17.9841697);
      }
    };

    const getApi = async (lat: number, long: number) => {
      const ImportedAds = await getAllAds(
        "Stockholm",
        "parttime.min=100",
        `${lat}%2C${long}`
      );
      dispatch({
        type: ActionType.LOADED,
        payload: JSON.stringify(ImportedAds.hits),
      });

      dispatch({
        type: ActionType.HIDESPINNER,
        payload: "2",
      });
    };

    getUserLocation();
  }, []);

  return (
    <>
      <AdContext.Provider value={ads}>
        <DispatchContext.Provider value={dispatch}>
          <RouterProvider router={router}></RouterProvider>
        </DispatchContext.Provider>
      </AdContext.Provider>
    </>
  );
}

export default App;
