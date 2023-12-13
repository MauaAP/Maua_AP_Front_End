import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { ReactDOM } from 'react'
import { createBrowserRouter, RouterProvider, Form, Link, useLoaderData} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


// https://reactrouter.com/en/main/components/await 


export default function ViewPage(props){


    const dadosLoader = useLoaderData()
    // console.log(`\nDados do loader, com relação ao view do usuário:\n${dadosLoader.data}\n`)
    // console.log(dadosLoader.data)


    const [listaUsuarios, setListaUsuarios] = useState(dadosLoader.data);

    const TableHead = ({data}) => {

        let colunas = Object.getOwnPropertyNames(data)

        let idx = colunas.findIndex((coluna) => coluna === 'senha');
        if (idx > -1) { 
            colunas.splice(idx, 1);
        } else {
        }

        let ret = colunas.map((coluna, index) => 
            <th key={`coluna${index}`}>{coluna}</th >
        )

        return ret
    }


    const TableRow = ({usuarios}) => {
        // array com objetos, sendo cada um usuario e as informações do usuário

        let conteudoTabela = usuarios.map((user, indexUser) => {
            // Pegando os objetos usuarios um por um

            // Apaga a senha se tiver
            delete user['senha']

            // Pegando apenas os valores
            let userDataValues = Object.values(user)

            // Vou retornar colunas
            let colunas = userDataValues.map((value, indexValue) => {
                return <td key={`row${indexUser}column${indexValue}`}>{value.toString()}</td>
            })

            return <tr key={`row${indexUser}`}>{colunas}</tr>
        })

        return conteudoTabela
    }

    function onCheckChange (cpf) {
        let usuarioSelecionado = listaUsuarios.find((obj) => obj.cpf === cpf)
        let idxUsuarioSelecionado = listaUsuarios.indexOf(usuarioSelecionado);
        console.log(idxUsuarioSelecionado)
        usuarioSelecionado.selecionado = !usuarioSelecionado.selecionado
        let novaListaUsuarios = listaUsuarios
        novaListaUsuarios[idxUsuarioSelecionado] = usuarioSelecionado
        console.log(novaListaUsuarios)
        setListaUsuarios(novaListaUsuarios)
    }

    function onButtonClick () {

        let selecionados = listaUsuarios.filter((obj) => obj.selecionado === true)
        // const result = words.filter((word) => word.length > 6);

        console.log(selecionados)
    }


    return ( 
        <div className="container-fluid">
            {/* <h1 className="fs-1" >Usuários</h1> */}
            <h1 className="fs-1" >{props.secao}</h1>
            <div className="container overflow-x-scroll" style={{"background": "#d9d9d9"}} >
                
                <table className="table" style={{"width": "1000px"}}>
                    <thead>
                        <tr>
                            <TableHead data={listaUsuarios[0]} />
                        </tr>
                    </thead>
                    <tbody>  
                        <TableRow usuarios={listaUsuarios} />
                    </tbody>
                </table>



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
                <button className="btn btn-primary btn-lg m-3 position-absolute top-0 end-0" type="button" onClick={onButtonClick} >Baixar</button>
            </div>
        </div>
    )
}