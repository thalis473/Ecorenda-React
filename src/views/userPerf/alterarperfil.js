import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from "axios"
import {rotaPadrao} from '../../dados/fetch'

// import './userPerf.css'
import "./alterarperfil.css"

const AtualizarPerfil = () =>{
    
    const user = useSelector(state => state.user.dados[0])
    const dispatch = useDispatch()
    const history = useHistory()

    const [usuario, setUsuario] = useState({
        nome: user.nome,
        celular: user.celular,
        telefone: user.telefone
    })
    const [endereco, setEndereco] = useState({
        estado: user.estado,
        bairro: user.bairro,
        rua: user.rua,
        num: user.num,
        complemento: user.complemento
    })

    useEffect(()=> {
        axios.get(`${rotaPadrao}/usersatt/email=${user.email}/senha=${user.senha}`)
        .then(response => dispatch({type: 'ATT', payload: response.data}))
    },[])
    
    const heardes={
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'
    }
   
    /*envio Usuario*/
    const handleSubmitUsuario = (event) => {
        event.preventDefault()
        axios.post(`${rotaPadrao}/alterar/${user.id}`,usuario,{headers:heardes})
        .then(alert("Dados pessoais alterados com sucesso!"))
        .then(history.push("/perfil"))
        
        
    }
        /*envio endereços*/
    const handleSubmitEndereco = (event) => {
        event.preventDefault()
        axios.post(`${rotaPadrao}/alterarenderecos/${user.id}`, endereco,{headers:heardes})
        .then(alert("Endereço alterado com sucesso!"))
        .then(history.push("/perfil"))
    }
 
    
    const handleChangeUserUsuario = ({target}) => {
        const {id, value} = target
        setUsuario({...usuario, [id]: value})
        console.log(usuario)
    }
    const handleChangeEndereco = ({target}) => {
        const {id, value} = target
        setEndereco({...endereco, [id]: value})
        console.log(endereco)
    }

    
    return(
    <div className="container view-altperfil">


        <div className="view-frm">
            <form>
            <h2>Atualizar Dados Pessoais</h2>
                <div className="form-group">
                    <label htmlFor="nome">Seu Nome</label>
                    <input onChange={handleChangeUserUsuario} type="text" className="form-control col-sm-9 " id="nome" placeholder={user.nome}/>

                    <label htmlFor="email">E-mail</label>
                    <input onChange={handleChangeUserUsuario} type="text" id="email" className="form-control col-sm-9" value={user.email} disabled/>

                    <label htmlFor="email">Senha</label>
                    <input onChange={handleChangeUserUsuario} type="password" id="senha" className="form-control col-sm-9" value={user.senha} disabled/>

                    <label htmlFor="nome">Celular</label>
                    <input onChange={handleChangeUserUsuario} type="number" className="form-control col-sm-9 " id="celular" placeholder={user.celular}/>

                    <label htmlFor="nome">Telefone</label>
                    <input onChange={handleChangeUserUsuario} type="number" className="form-control col-sm-9 " id="telefone" placeholder={user.telefone}/>

                    <label htmlFor="atribuicao">Atribuição</label>
                    <input onChange={handleChangeUserUsuario} type="number" className="form-control col-sm-9 " id="telefone" placeholder={user.atribuicao} disabled/>

                </div>
                <button onClick={handleSubmitUsuario} className="btn btn-success">Salvar dados pessoais</button>
            </form>
        </div>

        <div className="view-frm">
        <form>
        <h2>Atualizar Endereço</h2>
            <div className="form-group">
                <label htmlFor="estado">Estado</label>
                <select onChange={handleChangeEndereco} id="estado" className="form-control col-sm-5">
                    <option value="rj">SELECIONE</option>
                    <option value="rj" >Rio de janeiro</option>
                </select>

                <label htmlFor="bairro">Bairro</label>
                <input onChange={handleChangeEndereco} type="text"  id="bairro" className="form-control col-sm-9" placeholder={user.bairro}/>

                <label htmlFor="rua">Rua</label>
                <input onChange={handleChangeEndereco} type="text"  id="rua" className="form-control col-sm-9" placeholder={user.rua}/>

                <label htmlFor="num">Número</label>
                <input onChange={handleChangeEndereco} type="text"  id="num" className="form-control col-sm-9" placeholder={user.num}/>

                <label htmlFor="complemento">Complemento</label>
                <input onChange={handleChangeEndereco} type="text"  id="complemento" className="form-control col-sm-9" placeholder={user.complemento}/>
            </div>
            <button onClick={handleSubmitEndereco} className="btn btn-success">Salvar Endereço</button>
        </form>
        </div>

    </div>
    );
}
export default AtualizarPerfil