import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import user from './reducers/user'
import contatos from './reducers/contatos'
import cadastro from './reducers/cadastro'

const store = createStore(combineReducers({
    user,
    contatos,
    cadastro
}), composeWithDevTools())

export default store