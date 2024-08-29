import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { Home } from "../pages/Home";
import { AdSinglePage } from "../pages/AdSinglePage";

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
      }
    ]
  }
])