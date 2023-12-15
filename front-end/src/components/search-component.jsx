import React, { useState } from "react";
import { ReactDOM } from 'react'
import { createBrowserRouter, RouterProvider, Form, Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SearchComponent(props) {

    const [searchId, setSearchId] = useState('')

    function onChange(event) {
        /**
         * Pega e guarda o valor que está sendo digitado pelo usuário.
         */
        const {value, name} = event.target;

        let newSearchId = searchId;
        newSearchId = value;
        setSearchId(newSearchId)
    };

    // async function search ({params, request}) {

    //     if (props.target === 'usuario'){
    //         axios.get(`http://localhost:1000/users/${searchId}`)
    //         .then((response) => {
    //             // console.log('No then:')
    //             // console.log(response.data)
    //             props.saveInfo(response.data)
    //         })
    //     } else {
    //         console.log('WIP')
    //     }
    // }

    return(
        <div>
            <Form action='' className="container" >

                {/* <div className="row justify-content-evenly">
                    <h6 className="col-4">Procurar por:</h6>
                    <div className="form-check col-4">
                        <input className="form-check-input" type="radio" name="escolherPesquisa" id="usuariosRadio" defaultChecked onClick={props.setTargetUsuarios} />
                        <label className="form-check-label" htmlFor="#usuariosRadio">Usuário</label>
                    </div>
                    <div className="form-check col-4">
                        <input className="form-check-input" type="radio" name="escolherPesquisa" id="eventosRadio" onClick={props.setTargetEventos} />
                        <label className="form-check-label" htmlFor="#usuariosRadio">Eventos</label>
                    </div>
                </div> */}

                <div>
                    <label className="form-label" htmlFor="#idInput">Informar {(props.target === 'usuario') ? 'CPF' : 'ID'} do {props.target}</label>
                    <input className="form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary" onChange={onChange} name="searchBar" type="text" id="idInput" />
                </div>

                <div className="my-3 row justify-content-evenly">
                    <button className="btn btn-primary col-4" onClick={() => {props.onSearchClick(searchId)}}>Procurar</button>
                </div>
            </Form>
        </div>
    )
}