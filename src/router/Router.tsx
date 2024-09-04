import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { Home } from "../pages/Home";
import { AdSinglePage } from "../pages/AdSinglePage";
import { PageNotFound } from "../pages/PageNotFound";

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
    ],
    errorElement: <PageNotFound />
  }
])