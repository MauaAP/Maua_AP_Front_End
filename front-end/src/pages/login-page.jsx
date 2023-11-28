import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactDOM } from 'react'
import { createBrowserRouter, RouterProvider, Form, Link } from "react-router-dom";

import LoginBox from "../components/login-component"

export default function Login(){
    return <div>
        <p>Página de Login</p>
        <LoginBox></LoginBox>
    </div>
}