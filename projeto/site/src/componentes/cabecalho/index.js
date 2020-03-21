import React from 'react';

import { connect }from 'react-redux';

const Cabecalho = props => (
    <header className="pb-2 mt-4 mb-2 border-bottom">
        <h2><strong>{props.titulo}</strong> -
        <small className="ml-1">{props.subtitulo}</small> - {props.data}</h2>
    </header>
);

const mapStoreToProps = store => ({
    data : store.contatos.data
})

const conectado = connect(mapStoreToProps, null) (Cabecalho);

export {conectado as Cabecalho}