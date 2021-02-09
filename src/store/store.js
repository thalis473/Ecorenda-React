import {createStore, combineReducers} from 'redux'

import user from './reducers/user'
import contatos from './reducers/contatos'

const store = createStore(combineReducers({
    user,
    contatos
}))

export default store