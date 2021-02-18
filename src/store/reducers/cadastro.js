
const INITIAL_STATE = {
    dados :{}
}

export default function cadastro(state = INITIAL_STATE, action) {
  
    switch(action.type) {
        case "ADD_CADASTRO": 
            return {dados: action.payload}
           
        default:
            
            return state
           
            
    }
}
