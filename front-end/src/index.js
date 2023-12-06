import React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


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
      // console.log(formData.keys())
      // console.log(formData.get("userName"));
      let res = axios.get("http://localhost:1000/", {
        type: "action",
        payload: {
          usarName: formData.get("userName"),
          userPassword: formData.get("userPassword")
        }
      }).then((response) => {
        // console.log('Recebendo a resposta do action /main')
        // console.log(response)
        return response
      })
      return res
    },
    loader: ({params}) => {
      console.log('no index, loader do /main')
      // console.log(params)
      let res = axios.get("http://localhost:1000/", {
        type: "loader",
        payload: {
          msg: "Request do loader"
        }
      }).then((response) => {
        return response
      })
      return res
      // return 'dados do loader do /main no index.'
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