import React from 'react';



export default function FormLogin(props) {
  /*estado do Form*/
 const [form,setForm]=React.useState({
    email:"",
    senha:"",
    tipo:""
});

//pegando dados do formulario
function controle({target}){ 
  const{id,value}=target
  setForm({...form,[id]:value})
  const valores ={[id]:value}
  console.log(form)
}



/*// buscando a api usuarios
function envio(){ 
  fetch('http://localhost:8080/login/api{variavel de parametro}') //email senha
  .then(function(res){ 
    res.json().then(function(res){
    let pessoa = [res]
      console.log(pessoa)
    })
  })
}*/


    return(
        
        <div ClassName="container">
          
          <form className="container" action={`http://localhost:8080/login/api${form.email}`} > 
          <label for="tipo"> Entrar como</label>
                        <select  onChange={controle} id="tipo" className="form-control">
                            <option value="" selected>escolher</option>
                            <option value="coletor">coletor</option>
                            <option value="colaborador">colaborado</option>
                            <option value="estabelecimento">estabelecimento</option>
                        </select>
              <div className="form-group">
                  <label for="email">email</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Seu email" 
                  onChange={controle}/>
                  <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
              </div>
              <div className="form-group">
                  <label for="senha">Senha</label>
                  <input type="password" className="form-control" id="senha" placeholder="Senha"
                  onChange={controle}
                 />
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="autorizacao"/>
                <label className="form-check-label" for="autorizacao">continuar conectado</label>
          </div>
        
              <button type="submit"  className="btn btn-primary">entrar</button>
     </form>  
        </div>
    )
}

