import React from 'react';
import { Switch, Route} from 'react-router-dom';

import { Cursos } from '../../paginas/cursos';
import { Contatos } from '../../paginas/contatos';
import { ContatosResponder } from '../../paginas/responder';

export const Rotas = _ => (
    <Switch>
        <Route path="/cursos" component={Cursos}/>
        <Route path="/contato" component={Contatos}/>
        <Route path="/responder" component={ContatosResponder}/>
        <Route path="*" component={Cursos}/>
    </Switch>
);