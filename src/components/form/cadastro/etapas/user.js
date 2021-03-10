import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'


export default function EtapaUser() {
    const [usuario, setUsuario] = useState({})
    const history = useHistory()
    const dispatch = useDispatch()

    const handleChangeUsuario = ({target}) => {
        const {id, value} = target
        setUsuario({...usuario, [id]: value})
 }
 const heardes={
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...'
}  
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({type: "CAD_USER", payload: usuario})
    }

    return (
        <div className="container form-group">
            <label htmlFor="nome">Seu Nome</label>
                <input onChange={ handleChangeUsuario} type="text" className="form-control col-sm-9" id="nome" placeholder="Nome" required/>

                <label htmlFor="email">E-mail</label>
                <input onChange={ handleChangeUsuario} type="text"  id="email" className="form-control col-sm-9" required/>

                <label htmlFor="senha">Senha</label>
                <input onChange={ handleChangeUsuario} type="password"  id="senha" className="form-control col-sm-9" required/>                       

                <label htmlFor="atribuicao">Atribuição</label>
                <select onChange={ handleChangeUsuario} id="atribuicao" className="form-control col-sm-9">
                    <option>SELECIONE</option>
                    <option value="catador">Catador</option>
                    <option value="doador">Doador</option>
                    <option value="estabelecimento">Estabelecimento</option>
                </select>
                <br />
                <button onClick={ handleSubmit } className="btn btn-success">Confirmar</button>
        </div>
    )
}