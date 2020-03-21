import React from 'react';
import { Cabecalho } from '../../componentes/cabecalho';
import { CadastroCursos } from './cadastro';

export class Cursos extends React.Component {

    state = {total : 0}

    atualizaTotal(total){
        this.setState({...this.state, total});
    }

    render() {
        return (
            <div className="container">
                <Cabecalho titulo="Cursos" subtitulo={"cadastro de cursos. total:" + this.state.total}/>
                <CadastroCursos atualizaTotal={this.atualizaTotal.bind(this)}/>
            </div>
        )
    }
}