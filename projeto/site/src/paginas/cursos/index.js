import React from 'react'
import { Cabecalho } from '../../componentes/cabecalho'
import { CursoCadastro } from './cadastro'

export  class Cursos extends React.Component {
    render(){
        return (
            <div className="container">
                <Cabecalho titulo="Cursos"
                    subtitulo=" gerenciamento da plataforma de cursos"></Cabecalho>
                <CursoCadastro/>
            </div>
        )
    }
}