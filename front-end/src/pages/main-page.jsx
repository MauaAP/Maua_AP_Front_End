import React, { useState } from "react";
import { ReactDOM } from 'react'
import { Outlet, useLocation, useLoaderData, useActionData, useNavigation  } from "react-router-dom";

import TopMenu from "../components/top-menu-component";
import SideMenu from "../components/side-menu-component"



export default function MainPage(){

    // const dataDoLoader = useLoaderData()
    // console.log(dataDoLoader)

    // const dataDoAction = useActionData()
    // console.log(dataDoAction)
    // const [userInfo, setUserInfo] = useState(state);

    // const navigation = useNavigation();
    // console.log('formdata:')
    // console.log(navigation.formData)

    // let { state } = useLocation();
    // console.log('no main 1')


    // if (state) {
    //     set
    // }

    // console.log('state: ' + state)


    return (
        <div>
            <TopMenu ></TopMenu>
            {/* <SideMenu ></SideMenu> */}
            <Outlet />
        </div>
    )
}