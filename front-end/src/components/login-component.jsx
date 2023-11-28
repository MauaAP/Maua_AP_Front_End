import React, { useState } from "react";
import { ReactDOM } from 'react'
import { createBrowserRouter, RouterProvider, Form, Link } from "react-router-dom";

// import LoginUser from '../fake-back-end/login-functions'


export async function action(userName, userPassword) {
    // const DBusers = await LoginUser(userName, userPassword);
    // console.log(DBusers)
    // return DBusers;
    return 'DBusers'
};






export default function LoginBox() {

    const [userInfo, setUserInfo] = useState({userName: '', userPassword: ''});
    // const [isAdmin, setIsAdmin] = useState(false);

    let route = ''
    let acceptLogin = false;


    function onChange(event) {
        /**
         * Pega e guarda o valor que está sendo digitado pelo usuário.
         */
        const {value, name} = event.target;
        let newUserInfo = userInfo;
        newUserInfo[name] = value;
        setUserInfo(newUserInfo);
    };

    
    const onClick = () => {
        if (userInfo["userName"] === "Gu"){
            let newUserInfo = userInfo;
            newUserInfo["isAdmin"] = true;
            setUserInfo(newUserInfo);
        } else {
            let newUserInfo = userInfo;
            newUserInfo["isAdmin"] = false;
            setUserInfo(newUserInfo);
        }
    };

    function formAction(algo) {
        console.log('formAction')
        console.log(algo)
    };

    return(
        <Form action='/main' method="post" state={userInfo} >
        {/* <Form action='/main' method="post"  > */}
            {/* <label htmlFor="user-name-input">Nome do usuário:</label> */}
            <p>Nome do usuário:</p>
            <input id="user-name-input" type="text" name="userName" placeholder="Nome" onChange={onChange} required />
            <hr />
            {/* <label htmlFor="user-password-input">Senha do usuário:</label> */}
            <p>Senha do usuário:</p>
            <input id="user-password-input" type="password" name="userPassword" placeholder="Senha" onChange={onChange} required />
            <hr />
            <button type="submit" onClick={onClick}>Login</button>
        </Form>
    )
};