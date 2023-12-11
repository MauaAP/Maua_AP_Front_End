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
import ViewPage from "./pages/view-page"
import InfoPage from "./pages/info-page";

import WIP from "./pages/wip-page"




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
      console.log('no index, action do /main (executando o action)');
      console.log(formData.get("userName"));
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
    // action: async ({params, request}) => {
    //   let formData = await request.formData();
    //   let userName = formData.get("userName");
    //   return userName;
    // },
    loader: ({params}) => {
      console.log('no index, loader do /main (executando o loader)')
      // console.log(params)
      let res = axios.get("http://localhost:1000/", {
        type: "loader",
        payload: {
          msg: "Request do loader"
        }
      }).then((response) => {
        return response
      })
      console.log(res)
      return res
      // return 'dados do loader do /main no index.'
    },

    
    children: [
      {
        path: "user-data",
        element: <InfoPage/>
      },
      {
        path: "certificates",
        element: <Certificates />
      },
      {
        path: "usuarios",
        children: [
          {
            path: "visualizar",
            element: <ViewPage />
          },
          {
            path: "adicionar",
            element: <WIP page="usuarios/adicionar" />
          },
          {
            path: "remover",
            element: <WIP page="usuarios/remover" />
          },
          {
            path: "atualizar",
            element: <WIP page="usuarios/atualizar" />
          }
        ]
      },
      {
        path: "eventos",
        element: <WIP page="eventos" />,
        children: [
          {
            path: "visualizar",
            element: <WIP page="eventos/visualizar" />
          },
          {
            path: "adicionar",
            element: <WIP page="eventos/adicionar" />
          },
          {
            path: "remover",
            element: <WIP page="eventos/remover" />
          },
          {
            path: "atualizar",
            element: <WIP page="eventos/atualizar" />
          }
        ]
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );