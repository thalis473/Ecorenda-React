import CadUsuario from '../../components/form/cadastro/usuario'
import CadEndereco from '../../components/form/cadastro/endereco'
import CadMaterial from '../../components/form/cadastro/material'

const INITIAL_STATE = {
    component: <CadUsuario />
}

export default function formCadastro(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'passo2':
            return state.component = action.payload
        case 'passo3':
            return state.component = action.payload
        case 'registrar':
            return state
        default:
            return state
    }
}