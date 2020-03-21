import React from 'react';
export const ListaCursos = props => {
    const exibirLinhas = _ => {
        const cursos = props.cursos || [];

        return cursos.map(curso => (
            <tr key={curso._id}>
                <td>{curso.codigo}</td>
                <td>{curso.descricao}</td>
                <td>
                    <button className="btn btn-success"
                        onClick={() => props.editarCurso(curso)}>
                        <i className="fa fa-check"></i>
                    </button>
                    <button className="btn btn-danger ml-1"
                        onClick={() => props.removerCurso(curso._id)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ));
    }

    return (
        <div>
            <h3>Lista de Cursos</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {exibirLinhas()}
                </tbody>
            </table>
        </div>
    );
}