import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import user from './reducers/user'
import contatos from './reducers/contatos'
import cadastro from './reducers/cadastro'
import materiais from './reducers/materiais'
import selecionado from './reducers/selecionado'
import agendamento from './reducers/agendamento'

const store = createStore(combineReducers({
    user,
    contatos,
    cadastro,
    materiais,
    selecionado,
    agendamento
}), composeWithDevTools())

export default store