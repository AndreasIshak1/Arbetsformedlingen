import { RouterProvider, useParams } from "react-router-dom";
import "./App.css";
import { router } from "./router/Router";
import { useEffect, useState } from "react";
import { AdContext, IAdContext } from "./context/AdContext";
import { getAllAds } from "./services/addService";
import { getCurrentLocation } from "./services/locationService";
import { ILocation } from "./models/ILocation";

function App() {
  const [userLocation, setUserLocation] = useState<
    | {
        latitude: number;
        longitude: number;
      }
    | undefined
  >(undefined);

  const [ads, setAds] = useState<IAdContext>({
    hits: [],
    search: () => {},
  });
  const [location, setLocation] = useState<ILocation>();

  useEffect(() => {
    const getApi = async () => {
      const ImportedAds = await getAllAds("Stockholm");
      setAds({ ...ads, hits: ImportedAds.hits });
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

  console.log(location);

  ads.search = async (text: string) => {
    const searchResult = await getAllAds(text);
    setAds({ ...ads, hits: searchResult.hits });
  };

  return (
    <>
      <AdContext.Provider value={ads}>
        <RouterProvider router={router}></RouterProvider>
      </AdContext.Provider>
    </>
  );
}

export default App;
