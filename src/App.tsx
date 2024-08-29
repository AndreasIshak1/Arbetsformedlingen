import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/Router";
import { useEffect, useState } from "react";
import { AdContext, IAdContext } from "./context/AdContext";
import { getAllAds } from "./services/addService";


function App() {
  const [ads, setAds] = useState<IAdContext>({
    hits: [],
    search: () => { }
  });


  useEffect(() => {
    const getApi = async () => {
      const ImportedAds = await getAllAds("Stockholm");
      setAds({ ...ads, hits: ImportedAds.hits });
    }
    getApi();
  }, []);
  
  ads.search = async (text: string) => {
    const searchResult = await getAllAds(text)
    setAds({ ...ads, hits: searchResult.hits })
  }

  return <>
    <AdContext.Provider value={ads}>
      <RouterProvider router={router}>

      </RouterProvider>
    </AdContext.Provider>

  </>;
}

export default App;
