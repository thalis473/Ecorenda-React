import {useState} from 'react'


export default function CadUsuario() {
    const [usuario, setUsuario] = useState({})
    

    const handleChange = ({target}) => {
        const {id, value} = target
        setUsuario({...usuario, [id]: value})
        console.log(usuario)
    }



    return (
        <div className="form-group">
                <label htmlFor="nome">Seu Nome</label>
                <input onChange={handleChange} type="text" className="form-control col-sm-6" id="nome" placeholder="Nome"/>

                <label htmlFor="email">E-mail</label>
                <input onChange={handleChange} type="text"  id="email" className="form-control col-sm-3"/>

                <label htmlFor="senha">Senha</label>
                <input onChange={handleChange} type="password"  id="senha" className="form-control col-sm-3"/>                       

                <label htmlFor="atribuicao">Atribuição</label>
                <select onChange={handleChange} id="atribuicao" className="form-control col-sm-3">
                    <option>SELECIONE</option>
                    <option value="catador">Catador</option>
                    <option value="doador">Doador</option>
                    <option value="estabelecimento">Estabelecimento</option>
                </select>
            </div>
    )
}