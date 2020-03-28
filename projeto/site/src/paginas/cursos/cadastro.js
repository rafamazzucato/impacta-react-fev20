import React from 'react'
import { FormularioCursos } from './formulario'
import { ListaCursos } from './lista'

export class CursoCadastro extends React.Component {

    render(){
        return (
            <div className="row border-bottom ">
                <div className="col-md-4">
                    <FormularioCursos/>
                </div>
                <div className="col-md-8">
                    <ListaCursos />
                </div>
            </div> 
        )
    }
}