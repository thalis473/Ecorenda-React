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
        default:
            return state
            
    }
}
