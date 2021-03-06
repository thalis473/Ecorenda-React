import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import './contato.css';
import logo from '../../img/icons/ecorenda.png';

const Contato = () => {
    const history = useHistory()
    const [form, setForm] = useState({})

    const handleChange = ({target}) => {
        const {id, value} = target
        setForm({...form, [id]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let conteudo = `
        nome: ${form.nome}
        email: ${form.email}
        mensagem: ${form.msg}
        `

        alert(`Mensagem enviada com sucessso! ${conteudo}`)
        setForm({})
        history.push('/contato')
    }

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
                    <input onChange={handleChange} id='nome' type='text' className='form-control' required/>
                    <label>E-mail</label>
                    <input onChange={handleChange} id='email' type='email' className='form-control' required/>
                    <label>Mensagem</label>
                    <textarea onChange={handleChange} id='msg' className='form-control'></textarea>

                    <button onClick={handleSubmit} className='btn btn-success'>Enviar</button>
                </form>
                <div>
                    <h5>Siga nosso Instagram</h5>
                    <a href="http://www.instagram.com/eco_renda" rel="noreferrer noopener" target="_blank"><img src={logo} alt="logo do EcoRenda" width='100px'/></a><br/>
                    <small>Clique na Imagem</small>
                </div>
            </div>
        </div>
    );
}

export default Contato;