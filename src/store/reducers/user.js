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
            {id: 1, nome: "papel", peso : 2, valor : "", fill:"#0000FF"},
            {id: 2, nome: "alumínio", peso : 25, valor : "", fill: "#FFFF00"},
            {id: 3, nome: "plastico", peso : 14, valor : "", fill: "#FF0000"},
            {id: 3, nome: "vidro", peso : 14, valor : "", fill: "#008000"},
            // {id: 4, nome: "ferro", peso : 1, valor : ""},
            // {id: 5, nome: "madeira", peso : 3, valor : ""},
            // {id: 6, nome: "orgânico", peso : 9, valor : ""}
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
