import React from 'react';
import {useState, useEffect} from 'react'
import {getApi, getUser} from '../../../dados/fetch'
import {Redirect} from 'react-router'


export default function FormLogin(props) {
  // Listagem de usuarios
  const [user, setuser] = useState(false)


  /*estado do Form*/
 const [formData,setFormData]= useState({
    email:"",
    senha:"",
    tipo:""
});

//pegando dados do formulario
function controle({target}){ 
  const{id,value}=target
  setFormData({...formData,[id]:value})
  const valores ={[id]:value}
}

const login = async (event)=> {
    event.preventDefault()
    let dados = await getUser(formData.email)
    setuser(dados)
  }
  if(user) {
    if(formData.email === user[0].email && formData.senha === user[0].senha) {
      console.log(user)
      return <Redirect to="/user" />
    } else {
      alert("Email ou senha incorretos, favor verificar os campos!")
      setuser(false)
    }
  }

    return(
        
        <div ClassName="container">
          <h1>Login</h1>
          
          <form className="container form-group col-sm-4"> 
          <label for="tipo"> Entrar como</label>
                        <select  onChange={controle} id="tipo" className="form-control">
                            <option value="" selected>Selecione</option>
                            <option value="catador">Catador</option>
                            <option value="doador">Doador</option>
                            <option value="estabelecimento">Estabelecimento</option>
                        </select>
              
                  <label for="email">E-mail</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Seu email" 
                  onChange={controle}/>
                  <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu e-mail, com ninguém.</small>
           
             
                  <label for="senha">Senha</label>
                  <input type="password" className="form-control" id="senha" placeholder="Senha"
                  onChange={controle}
                 />
              <br/><br/><br/>
              <button onClick={login} className="btn btn-success">Entrar</button>
     </form>  
        </div>
    )
}

