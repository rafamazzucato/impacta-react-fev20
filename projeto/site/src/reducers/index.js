import { combineReducers } from 'redux';

import contatoReducer from './contato';
import cursosReducer from './cursos';

const tabelas = combineReducers({
    contatos : contatoReducer,
    cursos: cursosReducer
})

export default tabelas;