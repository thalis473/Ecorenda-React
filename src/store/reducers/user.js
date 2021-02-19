const INITIAL_STATE = {
    dados : [
        {nonUser: true}
    ]
}

export default function user(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "LOGIN": 
            return {dados: action.payload}
        
        case "ATT": 
            return {...state, dados: [action.payload, state.dados[1]]}

        case 'CAD':
            return { dados: action.payload}

        case 'LOGOUT': 
            return state = INITIAL_STATE
        default:
            return state
            
    }
}
