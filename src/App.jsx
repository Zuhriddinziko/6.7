import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

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
import ProtectedRouteres from "./components/ProtectedRouteres";
import { useGlobalContext } from "./hook/useGlobalContext";
function App() {
  const { user, authReady } = useGlobalContext();
  const router = createBrowserRouter([
    {
      path: "/",

      element: (
        <ProtectedRouteres user={user}>
          <MainLayouts />
        </ProtectedRouteres>
      ),
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
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);
  return <>{authReady && <RouterProvider router={router} />}</>;
}

export default App;
