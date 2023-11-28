import React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import axios from "axios";


import Main from "./pages/main-page"
import User from "./pages/user-page"
import Login from "./pages/login-page";
import Certificates from "./pages/certificates-page"
import ErrorPage from "./pages/error-page"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage/>,
    id: "root"
  },
  {
    path: "main",
    element: <Main />,
    errorElement: <ErrorPage/>,


    action: async ({params, request}) => {
      // const axios = require('axios');
      let formData = await request.formData();
      console.log('no index, action do /main');
      console.log(formData.keys())
      console.log(formData.get("userName"));
      axios.post("http://localhost:1000/", {
        type: "login",
        payload: {
          usarName: formData.get("userName"),
          userPassword: formData.get("userPassword")
        }
      })
      return formData
    },
    loader: ({params}) => {
      console.log('no index, loader do /main')
      console.log(params)
      return params
    },

    
    children: [
      {
        path: "user-data",
        element: <User/>
      },
      {
        path: "certificates",
        element: <Certificates />
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );