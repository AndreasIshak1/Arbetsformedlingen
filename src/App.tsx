import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/Router";
import { useEffect, useState } from "react";
import { AdContext } from "./context/AdContext";
import { getAllAds } from "./services/addService";
import { IHits } from "./models/IHits";

function App() {
  const [ads, setAds] = useState<IHits[]>([]);

  useEffect(() => {
    const getApi = async () => {
      const ImportedAds = await getAllAds(); // lägg in input här
      setAds(ImportedAds.hits);
    }
    getApi();
  }, []);

  return <>
    <AdContext.Provider value={ads}>
      <RouterProvider router={router}>

      </RouterProvider>
    </AdContext.Provider>

  </>;
}

export default App;
