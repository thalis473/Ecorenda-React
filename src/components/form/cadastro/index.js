import React from 'react';
import './cadastro.css'
import Autorizacao from './autorizacao/index'


export default function FormCadastro(props) {
/*estado do Form*/
const [form,setForm]=React.useState({
    email:"",
    senha:"",
    tipo:"",
    sobrenome:"",
    endereco:"",
});

    return(
       
        <div ClassName="container">
             <h1>Cadastre</h1>
           <form className="container form-group">
               <div className="from-row">
                   
                        <label for="Nome">Seu Nome</label>
                        <input type="text" className="form-control col-sm-6" id="nome" placeholder="Nome"/>
                 
                        <label for="Sobrenome">Sobrenome</label>
                        <input type="text" className="form-control col-sm-6" id="sobrenome" placeholder="sobrenome"/>  

                         <label for="email">E-mail</label>
                        <input type="text"  id="email" className="form-control col-sm-3"/>

                         <label for="senha">Senha</label>
                        <input type="password"  id="senha" className="form-control col-sm-3"/>                       
                </div>

                <div className="from-row">
                    
                        <label for="local">Seu Endereço</label>
                        <input type="text" className="form-control" id="local" placeholder="Endereço completo"/>               
                <div/>

                <div className="from-row">                  
                        <label for="cidade">Cidade</label>
                        <input type="text" className="form-control col-sm-3" id="cidade" placeholder="Cidade"/>
                                    
                        <label for="inputCidade">Categoria</label>
                        <select id="inputEst" className="form-control col-sm-3">
                            <option selected>Selecione </option>
                            <option value="catador">Catador</option>
                            <option value="doador">Doador</option>
                            <option value="estabelecimento">Estabelecimento</option>
                        </select> 

                        <label for="cep">CEP</label>
                        <input type="text"  id="cep" className="form-control col-sm-3"/>                  
                </div>
                <br/><br/>                                
                    <Autorizacao />
                    <br/><br/>                                              
                        <div className="form-row">
                            <div className="form-group col-sm-12">
                            <button type="submit" className="btn btn-success">ENVIAR</button>               
                    </div>
                </div>

               </div>
           </form>
        </div>
    )
}