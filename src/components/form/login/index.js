import React from 'react'

export default function FormLogin(props) {
    return(  
    <div ClassName="container">
      <h1>Login</h1>
      
      <form className="container form-group col-sm-4"> 
      <label for="tipo"> Entrar como</label>
        <select id="tipo" className="form-control">
            <option value="" selected>Selecione</option>
            <option value="catador">Catador</option>
            <option value="doador">Doador</option>
            <option value="estabelecimento">Estabelecimento</option>
        </select>
          
        <label for="email">E-mail</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Seu email" />
        <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu e-mail, com ninguém.</small>
        
        <label for="senha">Senha</label>
        <input type="password" className="form-control" id="senha" placeholder="Senha"/>
        <br/><br/><br/>
        <button className="btn btn-success">Entrar</button>
      </form>  
  </div>
    )
}

