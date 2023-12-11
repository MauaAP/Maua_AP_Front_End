import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactDOM } from 'react'
import { createBrowserRouter, RouterProvider, Form, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


// https://reactrouter.com/en/main/components/await 


export default function ViewPage(){
    return ( 
        <div className="container-fluid">
            <h1 className="fs-1" >Usuários</h1>
            <div className="container" style={{"background": "#d9d9d9"}} >
                <div className="vstack gap-0" style={{"background": "#d9d9d9"}}>
                    <div className="row m-1 mt-2" style={{"background": "#ffffff"}} >
                        <div className="col-6 m-2 fw-bold" >Nome</div>
                        <div className="col   m-2 fw-bold" >CPF</div>
                        <div className="col   m-2 fw-bold text-center" >Selecionado</div>
                    </div>

                    <div className="row m-1" style={{"background": "#ffffff"}} >
                        <div className="col-6 m-2" >Gustavo</div>
                        <div className="col   m-2" >123.456.789-00</div>
                        <div className="col   m-2  " >
                            {/* <div className="form-check " >
                                <input className="form-check-input" type="checkbox" value="" id="checkbox01" />
                            </div> */}
                            <input className="form-check-input position-relative start-50 top-50 translate-middle" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/>
                        </div>
                    </div>

                    <div className="row m-1" style={{"background": "#ffffff"}} >
                        <div className="col-6 m-2" >Gustavo</div>
                        <div className="col   m-2" >123.456.789-00</div>
                        <div className="col   m-2  " >
                            {/* <div className="form-check " >
                                <input className="form-check-input" type="checkbox" value="" id="checkbox01" />
                            </div> */}
                            <input className="form-check-input position-relative start-50 top-50 translate-middle" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container position-relative">
                <nav className="position-absolute start-0 end-50 m-3 " aria-label="Page navigation">
                    {/*  */}
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <button className="page-link"><span aria-hidden="true">&laquo;</span></button>
                        </li>

                        <li className="page-item active">
                            <button className="page-link">1</button>
                        </li>
                        <li className="page-item">
                            <button className="page-link">2</button>
                        </li>
                        <li className="page-item">
                            <button className="page-link">3</button>
                        </li>

                        <li className="page-item">
                            <button className="page-link"><span aria-hidden="true">&raquo;</span></button>
                        </li>
                    </ul>
                </nav>
                <button className="btn btn-primary btn-lg m-3 position-absolute top-0 end-0" type="button" >Baixar</button>
            </div>
        </div>
    )
}