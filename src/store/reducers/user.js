const INITIAL_STATE = {
    dados : {
        nonUser: true
    },
    dadosCadastroUser : false,
    dadosCadastroEnd : false
}

export default function user(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "LOGIN": 
            return {dados: action.payload}
        
        case "ATT": 
            return {dados: action.payload}

        case 'CAD_USER':
            return { ...state, dadosCadastroUser: action.payload}

        case 'CAD_END':
            return { ...state, dadosCadastroEnd: action.payload}

        case 'LOGOUT': 
            return state = INITIAL_STATE
        default:
            return state
            
    }
}
