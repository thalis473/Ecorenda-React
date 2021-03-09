const INITIAL_STATE = {
    dados: false
}

export default function materiais(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "CARREGAR_MATERIAL":
            
            return {dados: action.payload}
    
        default:
            return state
    }
}