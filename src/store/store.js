import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import user from './reducers/user'
import contatos from './reducers/contatos'
import formCadastro from './reducers/cadastro'

const store = createStore(combineReducers({
    user,
    contatos,
    formCadastro
}), composeWithDevTools())

export default store