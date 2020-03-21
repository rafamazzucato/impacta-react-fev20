import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    atualizaData,
    atualizaNome,
    atualizaEmail,
    atualizaAssunto,
    adicionarContato
} from '../../actions/contato';

const ContatoForm = props => {

    const adicionar = async e => {
        e.preventDefault();
        props.adicionarContato(props);
    }

    return (
        <div>
            <h3 className="border-bottom">Formulário</h3>
            <form>
                <div className="form-group row">
                    <label htmlFor="data"
                        className="col-sm-3 col-form-label">Data:</label>
                    <div className="col-sm-5 col-6">
                        <input type="date"
                            className="form-control" id="data"
                            value={props.data}
                            onChange={props.atualizaData} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="nome"
                        className="col-sm-3 col-form-label">Nome:</label>
                    <div className="col-sm-9">
                        <input type="text"
                            className="form-control" id="nome"
                            value={props.nome}
                            onChange={props.atualizaNome} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="email"
                        className="col-sm-3 col-form-label">Email:</label>
                    <div className="col-sm-9">
                        <input type="email"
                            className="form-control" id="email"
                            value={props.email}
                            onChange={props.atualizaEmail} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="assunto"
                        className="col-sm-3 col-form-label">Assunto:</label>
                    <div className="col-sm-9">
                        <textarea className="form-control"
                            id="assunto" rows="5"
                            value={props.assunto}
                            onChange={props.atualizaAssunto} />
                    </div>
                </div>
                <div className="form-group row">
                    <button className="btn btn-primary ml-3 mb-3"
                        onClick={adicionar}>
                        Adicionar
                    </button>
                </div>
            </form>
        </div>
    )
}

const mapStoreTopProps = store => ({
    data: store.contatos.data,
    nome: store.contatos.nome,
    email: store.contatos.email,
    assunto: store.contatos.assunto
});

const mapActionsToProps = dispatch => bindActionCreators({
    atualizaData,
    atualizaNome,
    atualizaEmail,
    atualizaAssunto,
    adicionarContato
}, dispatch);

const conectado = connect(mapStoreTopProps, mapActionsToProps)(ContatoForm);

export { conectado as ContatoForm }