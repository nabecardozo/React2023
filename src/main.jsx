import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//rootes
import Layout from "./components/Layout/Layout";
import ItemRoot from "./Routes/Item";
import Root from "./Routes/Root";
import Cart from "./Routes/cart";


import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { CustomProvider } from "./Context/Context";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [


      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/category/:id",
        element: <Root />,
      },
      {
        path: "/item/:id",
        element: <ItemRoot />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

      //{
      // path: "/checkout",
      //element: <div>Hello world!</div>,
      //},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomProvider>

      <RouterProvider router={router} />

    </CustomProvider>
  </React.StrictMode>
);
