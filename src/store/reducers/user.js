const INITIAL_STATE = {
    dados : {
        nome : "Thalis",
        img : "foto.jpg",
        atribuicao : "coletor",
        celular : "98888-7777",
        telefone : "2222-3333",
        email : "thalis@gmail.com",
        localizacao : {
            cep : "20775-410",
            estado : "RJ",
            bairro : "Miguel Couto",
            rua : "Rua George Sandi",
            num : 21
        },
        desc : "Sou um cara muito esforçado",
        materiais : [
            {id: 1, nome: "papel", peso : "", valor : ""},
            {id: 2, nome: "alumínio", peso : "", valor : ""},
            {id: 3, nome: "plastico", peso : "", valor : ""},
            {id: 4, nome: "ferro", peso : "", valor : ""},
            {id: 5, nome: "madeira", peso : "", valor : ""},
            {id: 6, nome: "orgânico", peso : "", valor : ""}
        ],
        favoritos : [],
        agendamentos : [
            {
                pedinte : {},
                fornecedor : {},
                materiais : {},
                promessa : true 
            }
        ]
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