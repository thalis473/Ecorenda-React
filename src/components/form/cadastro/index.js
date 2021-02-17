import React from 'react';
import './cadastro.css'
import Autorizacao from './autorizacao/index'


export default function FormCadastro() {
    return(   
    <div className="container">
        <h1>Cadastro</h1>
        <form className="container form-group">
            <div className="from-row">
                <label htmlFor="nome">Seu Nome</label>
                <input type="text" className="form-control col-sm-6" id="nome" placeholder="Nome"/>

                <label htmlFor="email">E-mail</label>
                <input type="text"  id="email" className="form-control col-sm-3"/>

                <label htmlFor="senha">Senha</label>
                <input type="password"  id="senha" className="form-control col-sm-3"/>                       

                <label htmlFor="atribuicao">Atribuição</label>
                <select id="atribuicao" className="form-control col-sm-3">
                    <option>SELECIONE</option>
                    <option value="catador">Catador</option>
                    <option value="doador">Doador</option>
                    <option value="estabelecimento">Estabelecimento</option>
                </select>  
            </div>
            
        </form>
    </div>
    )
}