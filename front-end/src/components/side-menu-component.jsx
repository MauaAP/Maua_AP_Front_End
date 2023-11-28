import React from "react";
// import { ReactDOM } from 'react'
import { Link, useLocation } from "react-router-dom";

export default function SideMenu({info}){

    // let { state } = useLocation();

    // const adminMenu = (
    //     <div>
    //         <h3>Usuários</h3>
    //         <ul>
    //             <li><Link>Visualizar Usuários</Link></li>
    //             <li><Link>Adicionar Usuários</Link></li>
    //             <li><Link>Remover Usuários</Link></li>
    //             <li><Link>Atualizar Usuários</Link></li>
    //         </ul>
    //         <h3>Eventos</h3>
    //         <ul>
    //             <li><Link>Visualizar Eventos</Link></li>
    //             <li><Link>Adicionar Eventos</Link></li>
    //             <li><Link>Remover Eventos</Link></li>
    //             <li><Link>Atualizar Eventos</Link></li>
    //         </ul>
    //     </div>
    // )

    return (
        <div>
            <h3>MENU</h3>
            <ul>
                <li><Link to={`/main/user-data`}>Visualizar perfil</Link></li>
                <li><Link to={`/main/certificates`}>Visualizar certificados</Link></li>
            </ul>
            {/* {info["isAdmin"] ? adminMenu : <></>} */}
        </div>
    )
}