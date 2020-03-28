import React from 'react'
import { Cabecalho } from '../../componentes/cabecalho';
import { ListaContatos } from './lista';

export class ContatosResponder extends React.Component {
    render() {
        return (
            <div className="container">
               <Cabecalho titulo="Contatos" subtitulo="lista de contatos a responder"/>
               <ListaContatos/>
            </div>
        )
    }
}