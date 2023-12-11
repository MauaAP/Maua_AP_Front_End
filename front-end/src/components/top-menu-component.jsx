import { ReactDOM } from 'react'
import React, { useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Form, Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Button from 'react-bootstrap/Button';

import SideMenu from '../components/side-menu-component';

export default function TopMenu ({info}) {
    
    // let { state } = useLocation();
    // console.log('no top-menu')
    // console.log(state)
    // const [show, setShow] = useState(false);

    // const handleShow  = () => setShow(true);
    // const handleClose = () => setShow(false);

    return(
        <nav className="navbar navbar-expand rounded-5 rounded-top-0 " style={{"height": "80px", 'background': "#0c1e46"}}>
                <img className="rounded-circle m-2 p-2" style={{"height": "80px"}} src="https://th.bing.com/th/id/R.494014c1479a1d770af09de8f952ca85?rik=yET%2fgVZTOu9kJw&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2013%2f01%2fgeneric-user-icon-windows_321380.png&ehk=6YmE90QJGnIzBGX40xBluW5kdj9g%2fjNgw3YailPgCAE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="Sem Imagem" />
                {/* <p className="text-light h-25 fs-3 fw-bolder" >{info["userName"]}</p> */}
                <p className="text-light h-25 fs-3 fw-bolder" >Usuário</p>

                {/* <SideMenu/> */}

                <Link to={`/`}>Logout</Link>
        </nav>
    )
}