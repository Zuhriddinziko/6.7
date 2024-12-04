import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import MainLayouts from "./layouts/MainLayouts";
// pages
import {
  Carts,
  Aboute,
  Login,
  SingleProduct,
  Register,
  Home,
  Contact,
} from "./pages";
// loader
import { loader as HomeLoader } from "./pages/Home";
import { loader as SinleProductsLoder } from "./pages/SingleProduct";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "/cart",
          element: <Carts />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/aboute",
          element: <Aboute />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/singleProduct/:id",
          element: <SingleProduct />,
          loader: SinleProductsLoder,
        },
      ],
    },
  ]);
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
