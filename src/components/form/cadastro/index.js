import {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'


import './cadastro.css'


export default function FormCadastro() {
    const [usuario, setUsuario] = useState({})
    const history = useHistory()
    const dispatch = useDispatch()

    const handleChangeUsuario = ({target}) => {
        const {id, value} = target
        setUsuario({...usuario, [id]: value})
        console.log(usuario)
 }
 const heardes={
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...'
}

   

    const handleSubmit = (event) => {
        axios.post('http://localhost:4000/users/cad', usuario,{headers:heardes})
        .then(()=>{
            axios.get(`http://localhost:4000/users/email=${usuario.email}/senha=${usuario.senha}`)
            .then(response=>dispatch({type: 'LOGIN', payload: response.data[0]}))
        })
        .then(()=>history.push("/perfil"))
        }
     
    return(   
    <div className="container">
        <h1>Cadastro</h1>
        <div className="container form-group">
        <form>
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
        
         
        </form>   
        </div>
       <button onClick={ handleSubmit } className="btn btn-success">Cadastrar</button>
    </div>
    )
}


