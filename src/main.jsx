import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//rootes
import Layout from "./components/Layout/Layout";
import ItemRoot from "./Routes/Item";
import Root from "./Routes/Root";
import Cart from "./Routes/Cart";


import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { CustomProvider } from "./Context/Context";


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAqMYppkWb3jWQ9PEJg0RgqGIflfab5oFU",
  authDomain: "farmacia-nair.firebaseapp.com",
  projectId: "farmacia-nair",
  storageBucket: "farmacia-nair.appspot.com",
  messagingSenderId: "75700094850",
  appId: "1:75700094850:web:e799a9eb2d25ccff97319b"
};


initializeApp(firebaseConfig);

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
