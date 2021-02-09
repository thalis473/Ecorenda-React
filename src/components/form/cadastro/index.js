import React from 'react';
import './cadastro.css'
import Autorizacao from './autorizacao/index'


export default function FormCadastro(props) {
    return(   
    <div className="container">
        <h1>Cadastre</h1>
        <form className="container form-group">
            <div className="from-row">
                <label htmlFor="Nome">Seu Nome</label>
                <input type="text" className="form-control col-sm-6" id="nome" placeholder="Nome"/>
            
                <label htmlFor="Sobrenome">Sobrenome</label>
                <input type="text" className="form-control col-sm-6" id="sobrenome" placeholder="sobrenome"/>  

                <label htmlFor="email">E-mail</label>
                <input type="text"  id="email-cad" className="form-control col-sm-3"/>

                <label htmlFor="senha">Senha</label>
                <input type="password"  id="senha-cad" className="form-control col-sm-3"/>                       
            </div>

            <div className="from-row">            
                <label htmlFor="local">Seu Endereço</label>
                <input type="text" className="form-control" id="local" placeholder="Endereço completo"/>               
            <div/>

            <div className="from-row">                  
                <label htmlFor="cidade">Cidade</label>
                <input type="text" className="form-control col-sm-3" id="cidade" placeholder="Cidade"/>
                            
                <label htmlFor="inputCidade">Categoria</label>
                <select id="inputEst" className="form-control col-sm-3">
                    <option value='' defaultValue>Selecione </option>
                    <option value="catador">Catador</option>
                    <option value="doador">Doador</option>
                    <option value="estabelecimento">Estabelecimento</option>
                </select> 

                <label htmlFor="cep">CEP</label>
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