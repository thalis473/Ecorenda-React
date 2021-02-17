import {createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import user from './reducers/user'
import contatos from './reducers/contatos'

const store = createStore(combineReducers({
    user,
    contatos
}), composeWithDevTools())

export default store