const INITIAL_STATE = {
    dados : {
        nonUser: true
    }
}

export default function user(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "LOGIN": 
            return {dados: action.payload}
            
        default:
            return state
            
    }
}
