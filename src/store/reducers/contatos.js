const INITIAL_STATE = {
    dados : [
        {
            nome:"NENHUM LOCAL ENCONTRADO",
            atribuicao:"estabelecimento",
            idE:true,
            usuarioId:true,
            cep:"00000-000",
            estado:"rj",
            bairro:"",
            rua:"",
            num:true,
            complemento:"nenhum complemento",
            idM:1,
            fk_aluminioId:2,
            fk_cobreId:2,
            fk_plasticoId:1,
        }
    ]
}

export default function contatos(state = INITIAL_STATE, action) {
    if(action.type === "CARREGAR") {
        return {dados: action.payload}
    }
    else if(action.type === "BUSCAR") {
        return {dados: action.payload}
    }
    else {
        return state
    }
}