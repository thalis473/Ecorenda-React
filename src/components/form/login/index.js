import React from 'react'

export default function FormLogin(props) {
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
        <input type="email" className="form-control" id="email-login" aria-describedby="emailHelp" placeholder="Seu email" />
        <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu e-mail, com ninguém.</small>
        
        <label htmlFor="senha">Senha</label>
        <input type="password" className="form-control" id="senha-login" placeholder="Senha"/>
        <br/><br/><br/>
        <button className="btn btn-success">Entrar</button>
      </form>  
  </div>
    )
}

