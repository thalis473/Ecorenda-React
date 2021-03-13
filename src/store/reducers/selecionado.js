const INITIAL_STATE = {
    buscador: false,
    dados: false
}

export default function selecionado(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "CLICK":
            
            return {buscador: action.payload}


        case "CARREGAR_SELECIONADO":

            return {dados: action.payload}

        default:
            return state
    }
}