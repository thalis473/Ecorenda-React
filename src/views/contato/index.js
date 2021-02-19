import React from 'react';
import './contato.css';

const Contato = () => {
    return(
        <div className="view-contato"  >
            <div className="view-contato-div" >
                <h2>Sobre Nós</h2>
                <div>
                    <p>Somos uma equipe de 4 integrantes que observou um grande problema ao seu redor:</p>
                    <p>▪︎Descarte incorreto de lixo ▪︎</p>

                    <p>Movidos a querer colaborar com o conscientização sobre o descarte, buscamos estudar mais a fundo sobre o assunto.</p>

                    <p>Notamos que cerca de 77% do lixo descartado poderia ser reciclado e reutilizado. Identificamos também uma peça fundamental em todo esse quebra cabeça:</p>

                    <p> • O Catador</p>

                    <p>O Catador é responsável por certa de 80% de todo o lixo reciclado em todo o país.</p>

                    <p>▪︎Já parou para analisar como é a rotina de trabalho do catador ??</p>

                    <p>Então, é justamente aí que queremos atuar.</p>

                    <p>Se interessou pela ideia?</p>
                    <p>▪︎Colabore com esse projeto!</p>
                </div>
            </div>
            <div className="view-contato-div">
                <h2>Contato</h2>
                <form className='form-group '>
                    <label>Nome</label>
                    <input id='nome' type='text' className='form-control' required/>
                    <label>E-mail</label>
                    <input id='email' type='email' className='form-control' required/>
                    <label>Mensagem</label>
                    <textarea id='msg' className='form-control'></textarea>

                    <button className='btn btn-success'>Enviar</button>
                </form>
                <div>
                    <h5>Siga nosso Instagram</h5><small>Clique na Imagem</small>
                    

                </div>
            </div>
        </div>
    );
}

export default Contato;