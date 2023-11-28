import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactDOM } from 'react'
import { createBrowserRouter, RouterProvider, Form, Link } from "react-router-dom";

export default function UserPage() {
    return(
        <>
        <div>
            <h1>Informações do perfil</h1>
            <h3>Nome</h3>
            <h3>CPF</h3>
            <h3>E-mail</h3>
        </div>
        </>
    )
};