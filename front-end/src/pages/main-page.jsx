import React, { useState } from "react";
import { ReactDOM } from 'react'
import { Outlet, useLocation } from "react-router-dom";

import TopMenu from "../components/top-menu-component";
import SideMenu from "../components/side-menu-component"

export default function MainPage(){

    let { state } = useLocation();
    console.log('no main 1')
    console.log(state)

    const [userInfo, setUserInfo] = useState(state);

    return (
        <div>
            <TopMenu info={userInfo}></TopMenu>
            <SideMenu info={userInfo}></SideMenu>
            <Outlet />
        </div>
    )
}