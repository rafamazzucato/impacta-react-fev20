import React from 'react'
import { Cabecalho } from '../../componentes/cabecalho';
import { ContatoForm } from './form';

export class Contatos extends React.Component {
    render() {
        return (
            <div className="container">
               <Cabecalho titulo="Contato" subtitulo="entre em contato conosco"/>
                <ContatoForm></ContatoForm>
            </div>
        )
    }
}