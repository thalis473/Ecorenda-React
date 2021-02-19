import {useState} from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import { useHistory } from 'react-router-dom';


export default function FormLogin(props) {
  const [login, setLogin] = useState({})
  const dispatch = useDispatch()

  const history = useHistory();


  const handleChange = ({target}) => {
    const {name, value} = target
    setLogin({...login, [name]: value})
  }

  const conn = ()=> axios.get(`http://localhost:4000/users/email=${login.email}/senha=${login.senha}`)
  const material=()=>axios.get("http://localhost:4000/agendamento/busca")
  
  const handleSubmit = async (event) => {
    event.preventDefault()
     const response = await conn()
     const response1 = await material()
     const dados =[response.data[0],response1.data]
    dispatch({type: 'LOGIN', payload: dados})
    await history.push("/user")

  }

    return(  
    <div className="container">
      <h1>Login</h1>
      
      <form className="container form-group col-sm-4"> 
      <label htmlFor="tipo"> Entrar como</label>
        <select id="tipo" className="form-control">
            <option value="" defaultValue>Selecione</option>
            <option value="catador">Catador</option>
            <option value="doador">Doador</option>
            <option value="estabelecimento">Estabelecimento</option>
        </select>
          
        <label htmlFor="email">E-mail</label>
        <input onChange={handleChange} type="email" className="form-control" name="email" placeholder="Seu email" />
        <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu e-mail, com ninguém.</small>
        
        <label htmlFor="senha">Senha</label>
        <input onChange={handleChange} type="password" className="form-control" name="senha" placeholder="Senha"/>
        <br/><br/><br/>
        <button onClick={handleSubmit} className="btn btn-success">Entrar</button>
      </form>  
  </div>
    )
}

