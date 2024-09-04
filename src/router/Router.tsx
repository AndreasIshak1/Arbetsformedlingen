import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { Home } from "../pages/Home";
import { AdSinglePage } from "../pages/AdSinglePage";
import { PageNotFound } from "../pages/PageNotFound";
import { SavePage } from "../pages/SavePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/ad/:id",
        element: <AdSinglePage />
      },
      {
        path: "/saved",
        element: <SavePage />
      },
    ],
    errorElement: <PageNotFound />
  }
])