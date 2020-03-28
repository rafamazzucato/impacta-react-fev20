const INITIAL_STATE = {
    data: '2020-03-21',
    nome: '',
    email: '',
    assunto: '',
    lista: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ATUALIZA_NOME': return {...state, nome: action.info}
        case 'ATUALIZA_DATA': return {...state, data: action.info}
        case 'ATUALIZA_EMAIL': return {...state, email: action.info}
        case 'ATUALIZA_ASSUNTO': return {...state, assunto: action.info}
        case 'LISTAR_CONTATOS': return {...state, lista: action.info}
        case 'LIMPAR_CONTATOS' : return INITIAL_STATE
        default : return state;
    }
}