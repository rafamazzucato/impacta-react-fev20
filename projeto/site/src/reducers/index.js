import { combineReducers } from 'redux';

import contatoReducer from './contato';

const tabelas = combineReducers({
    contatos : contatoReducer
})

export default tabelas;