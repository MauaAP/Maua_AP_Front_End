import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactDOM } from 'react'
import { createBrowserRouter, RouterProvider, Form, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function InfoPage (){
    return(
        <div className="container-fluid">
            <Form className="d-flex flex-column">
                <div className="d-flex">
                    <img className="rounded-circle m-3" style={{"height": "200px"}} src="https://th.bing.com/th/id/R.494014c1479a1d770af09de8f952ca85?rik=yET%2fgVZTOu9kJw&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2013%2f01%2fgeneric-user-icon-windows_321380.png&ehk=6YmE90QJGnIzBGX40xBluW5kdj9g%2fjNgw3YailPgCAE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" alt="Sem Imagem" />
                    <div className="container-fluid d-flex flex-column m-3">
                        <label className="m-1 ms-4 form-label fs-4" htmlFor="#nomeUsuario">Nome</label>
                        <input className="m-1 form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary fs-4" id="nomeUsuario" type="text" />

                        <label className="m-1 ms-4 form-label fs-4" htmlFor="#nomeUsuario">CPF</label>
                        <input className="m-1 form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary fs-4" id="nomeUsuario" type="text" />
                    </div>
                </div>
                <div className="container-fluid d-flex flex-column m-3">
                    <label className="m-1 ms-4 form-label fs-4" htmlFor="#nomeUsuario">E-mail</label>
                    <input className="m-1 form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary fs-4" id="nomeUsuario" type="text" />
                    <div className="container-fluid row my-2">
                        <div className="form-check col-3 fs-4 border-end border-black border-5 my-2">
                            <label className="form-check-label" htmlFor="isProfessor">Sou professor</label>
                            <input className="form-check-input" type="checkbox" id="isProfessor" />
                        </div>
                        <div className="row col fs-4 my-2">
                            <label className="col-4 col-form-label fs-5" htmlFor="#numeroMatricula">Número matricula</label>
                            <div className="col-8">
                                <input className="form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary fs-4" id="numeroMatricula" type="text" />
                            </div>
                        </div>
                    </div>
                    <label className="m-1 ms-4 form-label fs-4" htmlFor="#nomeUsuario">Senha antiga</label>
                    <input className="m-1 form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary fs-4" id="nomeUsuario" type="text" />
                    <label className="m-1 ms-4 form-label fs-4" htmlFor="#nomeUsuario">Nova senha</label>
                    <input className="m-1 form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary fs-4" id="nomeUsuario" type="text" />
                    <label className="m-1 ms-4 form-label fs-4" htmlFor="#nomeUsuario">Confirmar nova senha</label>
                    <input className="m-1 form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary fs-4" id="nomeUsuario" type="text" />
                    <div className="m-3 row justify-content-evenly" > 
                        <button className="btn btn-success fs-4 col-3 m-1" type="button" >Criar</button>
                        <button className="btn btn-warning fs-4 col-3 m-1 visually-hidden" type="button" >Atualizar</button>
                        <button className="btn btn-danger fs-4 col-3 m-1 visually-hidden" type="button" >Apagar</button>
                    </div>
                </div>

            </Form>
        </div>
    )
}