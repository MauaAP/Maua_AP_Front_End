import { ReactDOM } from 'react'
import React, { useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Form, Link, useLocation } from "react-router-dom";

export default function TopMenu ({info}) {
    
    // let { state } = useLocation();
    // console.log('no top-menu')
    // console.log(state)

    return(
        <>
        <div>
            <p>Foto</p>
            <p>{info["userName"]}</p>
            {info["isAdmin"] ? <p>(Admin)</p> : <></>}
            <p>Abrir menu lateral</p>
            <Link to={`/`}>Logout</Link>
        </div>
        </>
    )
}