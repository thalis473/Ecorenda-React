const INITIAL_STATE = {
    dados : [
        {
        perfilType : "Coletor",
        nome: "José",
        local : "Rua xyz, 999",
        recursos : ["plastico", "vidro", "papel", "aluminio"]
        },
        {
        perfilType : "Estabelecimento",
        nome: "Gustavo",
        local : "Rua xyz, 999",
        recursos : ["plastico", "vidro", "papel", "aluminio"]
        },
        {
        perfilType : "Doador",
        nome: "Rayssa",
        local : "Rua xyz, 999",
        recursos : ["plastico", "vidro", "papel", "aluminio"]
        },
        {
        perfilType : "Estabelecimento",
        nome: "Jucelyno",
        local : "Rua xyz, 999",
        recursos : ["plastico", "vidro", "papel", "aluminio"]
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