import React, { StrictMode, useState, useRef  } from "react";
import { createRoot } from "react-dom/client";
import { ReactDOM } from 'react'
import { createBrowserRouter, RouterProvider, Form, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import SearchComponent from "../components/search-component";
import axios from "axios";
import { convertCompilerOptionsFromJson } from "typescript";


export default function EventInfoPage (props){


    // userInfo
    const [eventInfo, setEventInfo] = useState(
        {
            'id': 'X',
            'nome': "evento",
            'publicoAlvo': "pessoas",
            'competencias': "...",
            'conteudo': "...",
            'cfpResponsavel': "xxx.xxx.xxx-x",
            'maxParticipantes': '999',
            'objetivoEvento': "...",
            'modalidade': "presencial",
            'tipo': "tipo",
            'local': "sala",
            'cargaHoraria': "xxH",
            
        }
    )

    function onChange(event) {
        /**
         * Pega e guarda o valor que está sendo digitado pelo usuário.
         */
        const {value, name} = event.target;
        let newEventInfo = {...eventInfo};
        newEventInfo[name] = value;
        setEventInfo(newEventInfo);
    };
    
    async function onSearchClick (searchId) {

        console.log(searchId)

        if (props.target === 'usuario'){
            axios.get(`http://localhost:1000/users/${searchId}`)
            .then((response) => {
                // console.log('No then:')
                // console.log(response.data)
                // setUserInfo(response.data)
            })
        } else {
            console.log('entrei')
            axios.get(`http://localhost:1000/events/${searchId}`)
            .then((response) => {
                // console.log('No then:')
                console.log(response.data)
                setEventInfo(response.data)
            })
        }
    }

    function onClick() {
        console.log('clicado')
    }

    // function onDeleteClick() {
    //     axios.delete(`http://localhost:1000/users/${userInfo.cpf}`)
    //     .then((res) => {
    //         console.log(res)
    //     })
    // }

    function onDeleteClick() {
        axios.delete(`http://localhost:1000/events/${eventInfo.id}`)
        .then((res) => {
            console.log(res)
        })
    }
    
    // function onCreateClick() {
    //     axios.post(`http://localhost:1000/users`, userInfo)
    //     .then((res) => {
    //         console.log(res)
    //     })
    // }

    function onCreateClick() {
        axios.post(`http://localhost:1000/events`, eventInfo)
        .then((res) => {
            console.log(res)
        })
    }


    function onUpdateClick() {
        console.log(eventInfo)
        axios.put(`http://localhost:1000/events/${eventInfo.id}`, eventInfo)
        .then((res) => {
            console.log('operação de atualização em andamento')
            console.log(res)
        })
    }


    return(
        <div className="container-fluid">
            <div className={`container-fluid ${props.create ? 'visually-hidden' : ''}`}>
                <SearchComponent className={props.create ? 'visually-hidden' : ''}   target={props.target} saveInfo={setEventInfo} onSearchClick={onSearchClick}></SearchComponent>
            </div>

            <Form className="d-flex flex-column">
                
                <div className="container-fluid d-flex flex-column m-3">
                    <label className="m-1 ms-4 form-label fs-4" htmlFor="#idEvento">ID</label>
                    <input className="m-1 form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary fs-4" value={eventInfo.id} onChange={onChange} disabled={props.delete} name="id" id="idEvento" type="text" />



                    <label className="m-1 ms-4 form-label fs-4" htmlFor="#nomeEvento">Nome</label>
                    <input className="m-1 form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary fs-4" value={eventInfo.nome} onChange={onChange} disabled={props.delete} name="nome" id="nomeEvento" type="text" />

                    <label className="m-1 ms-4 form-label fs-4" htmlFor="#publicoAlvoEvento">Publico alvo</label>
                    <input className="m-1 form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary fs-4" value={eventInfo.publicoAlvo} onChange={onChange} disabled={props.delete} name="publicoAlvo" id="publicoAlvoEvento" type="text" />

                    <label className="m-1 ms-4 form-label fs-4" htmlFor="#competenciasEvento">Competências</label>
                    <input className="m-1 form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary fs-4" value={eventInfo.competencias} onChange={onChange} disabled={props.delete} name="competencias" id="competenciasEvento" type="text" />

                    <label className="m-1 ms-4 form-label fs-4" htmlFor="#conteudoEvento">Conteúdo</label>
                    <input className="m-1 form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary fs-4" value={eventInfo.conteudo} onChange={onChange} disabled={props.delete} name="conteudo" id="conteudoEvento" type="text" />

                    <label className="m-1 ms-4 form-label fs-4" htmlFor="#cfpResponsavelEvento">CPF responsável</label>
                    <input className="m-1 form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary fs-4" value={eventInfo.cfpResponsavel} onChange={onChange} disabled={props.delete} name="cfpResponsavel" id="cfpResponsavelEvento" type="text" />

                    <label className="m-1 ms-4 form-label fs-4" htmlFor="#maxParticipantes">Número máximo de participantes</label>
                    <input className="m-1 form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary fs-4" value={eventInfo.maxParticipantes} onChange={onChange} disabled={props.delete} name="maxParticipantes" id="maxParticipantesEvento" type="text" />

                    <label className="m-1 ms-4 form-label fs-4" htmlFor="#objetivoEventoEvento">Objetivo do evento</label>
                    <input className="m-1 form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary fs-4" value={eventInfo.objetivoEvento} onChange={onChange} disabled={props.delete} name="objetivoEvento" id="objetivoEventoEvento" type="text" />

                    <label className="m-1 ms-4 form-label fs-4" htmlFor="#modalidadeEvento">Modalidade</label>
                    <input className="m-1 form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary fs-4" value={eventInfo.modalidade} onChange={onChange} disabled={props.delete} name="modalidade" id="modalidadeEvento" type="text" />

                    <label className="m-1 ms-4 form-label fs-4" htmlFor="#tipoEvento">Tipo</label>
                    <input className="m-1 form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary fs-4" value={eventInfo.tipo} onChange={onChange} disabled={props.delete} name="tipo" id="tipoEvento" type="text" />

                    <label className="m-1 ms-4 form-label fs-4" htmlFor="#localEvento">Local</label>
                    <input className="m-1 form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary fs-4" value={eventInfo.local} onChange={onChange} disabled={props.delete} name="local" id="localEvento" type="text" />

                    <label className="m-1 ms-4 form-label fs-4" htmlFor="#localEvento">Carga horária</label>
                    <input className="m-1 form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary fs-4" value={eventInfo.cargaHoraria} onChange={onChange} disabled={props.delete} name="cargaHoraria" id="cargaHorariaEvento" type="text" />






                    {/* <label className="m-1 ms-4 form-label fs-4" htmlFor="#nomeUsuario">Telefone</label>
                    <input className="m-1 form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary fs-4" placeholder={userInfo.telefone} onChange={onChange} disabled={props.delete} name="telefone" id="telefoneUsuario" type="text" />
                    <label className="m-1 ms-4 form-label fs-4" htmlFor="#nomeUsuario">Instituicao</label>
                    <input className="m-1 form-control rounded-pill bg-secondary-subtle border-secondary-subtle focus-ring focus-ring-secondary fs-4" placeholder={userInfo.instituicao} onChange={onChange} disabled={props.delete} name="instituicao" id="instituicaoUsuario" type="text" /> */}
                    <div className="m-3 row justify-content-evenly" > 
                        <button className={`btn btn-success fs-4 col-3 m-1 ${props.create ? '' : 'visually-hidden'}`} type="button" onClick={onCreateClick} >Criar</button>
                        <button className={`btn btn-warning fs-4 col-3 m-1 ${props.update ? '' : 'visually-hidden'}`} type="button" onClick={onUpdateClick} >Atualizar</button>
                        <button className={`btn btn-danger fs-4 col-3 m-1 ${props.delete ? '' : 'visually-hidden'}`} type="button" onClick={onDeleteClick} >Apagar</button>
                    </div>
                </div>

            </Form>
        </div>
    )

}