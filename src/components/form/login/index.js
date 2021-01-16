import React from 'react';




export default function FormLogin(props) {
    return(
        
        <div ClassName="container">
           <form className="container"> 
        <div className="form-group">
          <label for="exampleInputEmail1">email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email"/>
          <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Senha</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha"/>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Clique em mim</label>
        </div>
        <button type="submit" className="btn btn-primary">entrar</button>
      </form>
        </div>
    )
}

