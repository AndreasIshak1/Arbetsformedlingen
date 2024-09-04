import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/Router";
import { useEffect, useReducer, useState } from "react";
import { AdContext } from "./context/AdContext";
import { getAllAds } from "./services/addService";
import { getCurrentLocation } from "./services/locationService";
import { ILocation } from "./models/ILocation";
import { ActionType, AdReducer } from "./reducers/buttonReducer";
import { DispatchContext } from "./context/DispatchContext";

function App() {
  const [ads, dispatch] = useReducer(AdReducer, { hits: [] })
  // const [ads, setAds] = useState<IAdContext>({
  //   hits: [],
  //   search: () => { },
  // });
  const [location, setLocation] = useState<ILocation>();

  //const [savedCart, dispatch] = useReducer(ButtonReducer, [])

  useEffect(() => {
    const getApi = async () => {
      const ImportedAds = await getAllAds("Stockholm");
      dispatch({
        type: ActionType.LOADED,
        payload: JSON.stringify(ImportedAds.hits)
      })
    };

    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          getNewLocation(latitude, longitude);
        });
      } else {
        console.log("Saknar tillstånd för GeoLocation ");
      }
    };

    getApi();
    getUserLocation();
  }, []);

  const getNewLocation = async (
    lat: number | undefined,
    long: number | undefined
  ) => {
    if (lat && long) {
      const updatedLocation = await getCurrentLocation(lat, long);
      setLocation(updatedLocation);

    } else {
      console.log("Saknar lat & long");
    }
  };

  console.log(location?.address.city);

  // ads.search = async (text: string) => {
  //   const searchResult = await getAllAds(text);
  //   setAds({ ...ads, hits: searchResult.hits });
  // };


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
