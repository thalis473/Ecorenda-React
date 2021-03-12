const INITIAL_STATE = {
    dados: false
}

export default function materiais(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "CARREGAR_MATERIAL":
            
            return {dados: action.payload}

        case "LOGOUT":
            
            return {dados: INITIAL_STATE}
    
        default:
            return state
    }
}