import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    listarContatos,
    removerContato
} from '../../actions/contato';
import dateformat from 'dateformat';

const ListaContatos = props => {

    const {listarContatos} = props;

    useEffect(()=> {
        listarContatos();
    }, [listarContatos]);

    const exibirLinhas = _ => {
        const contatos = props.contatos || [];

        return contatos.map(contato => (
            <tr key={contato._id}>
                <td>{dateformat(contato.data, 'dd/mm/yyyy')}</td>
                <td>{contato.nome}</td>
                <td>{contato.email}</td>
                <td>{contato.assunto}</td>
                <td>
                    <button className="btn btn-success"
                        onClick={() => props.removerContato(contato._id)}>
                        <i className="fa fa-check"></i>
                    </button>
                </td>
            </tr>
        ));
    }

    return (
        <div>
            <h3>Lista de Contatos</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Assunto</th>
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

const mapStoreTopProps = store => ({
    contatos: store.contatos.lista,
});

const mapActionsToProps = dispatch => bindActionCreators({
    listarContatos,
    removerContato
}, dispatch);

const conectado = connect(mapStoreTopProps, mapActionsToProps)(ListaContatos);

export { conectado as ListaContatos }