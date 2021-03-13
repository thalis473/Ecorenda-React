const INITIAL_STATE = {
    materialSelecionado: false,
    dados: false,
    component: false
}

export default function agendamento(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ENVIAR_MATERIAIS":
            
            return {materialSelecionado: action.payload.target, component: action.payload.render}
        
        case "FECHAR_AGENDAMENTO":

            return {materialSelecionado: INITIAL_STATE.materialSelecionado, dados: INITIAL_STATE.dados, component: INITIAL_STATE.component} 
        default:
            return state
    }
}