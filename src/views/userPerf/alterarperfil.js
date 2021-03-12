import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import './userPerf.css'
import { Link } from 'react-router-dom'
import axios from "axios"
import {rotaPadrao} from '../../dados/fetch'

const AtualizarPerfil = () =>{
    const [usuario, setUsuario] = useState({})
    const [endereco, setEndereco] = useState({})
    const [material, setMaterial] = useState({})
    const [lista, setLista] = useState({})

    const user = useSelector(state => state.user.dados[0])
    const dispatch = useDispatch()
    const history = useHistory()

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
        /*envio material*/
    const handleSubmitMaterial = (event) => {
        event.preventDefault()
        axios.post(`${rotaPadrao}/users/cad`, material,{headers:heardes})
        .then(alert("Materiais atualizados!"))
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

    const handleChangeMaterial = ({target}) => {
        const {id, textContent} = target
        setMaterial({...material, [id]: textContent})
        setLista({...lista, [id]: textContent })
        console.log(lista)
    }

    

    return(
    <div className="container">

        <h2>Atualizar Dados Pessoais</h2>

        <div className="view-frm">
            <form>
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
                    <label>{user.atribuicao}</label>

                </div>
                <button onClick={handleSubmitUsuario} className="btn btn-success">Salvar dados pessoais</button>
            </form>
        </div>

        <h2>Atualizar Endereço</h2>
        <form>
            <div className="form-group">
                <label htmlFor="estado">Estado</label>
                <select onChange={handleChangeEndereco} id="estado" className="form-control col-sm-3">
                    <option value="rj">SELECIONE</option>
                    <option value="rj" >Rio de janeiro</option>
                </select>

                <label htmlFor="bairro">Bairro</label>
                <input onChange={handleChangeEndereco} type="text"  id="bairro" className="form-control col-sm-3" placeholder={user.bairro}/>

                <label htmlFor="rua">Rua</label>
                <input onChange={handleChangeEndereco} type="text"  id="rua" className="form-control col-sm-3" placeholder={user.rua}/>

                <label htmlFor="num">Número</label>
                <input onChange={handleChangeEndereco} type="text"  id="num" className="form-control col-sm-3" placeholder={user.num}/>

                <label htmlFor="complemento">Complemento</label>
                <input onChange={handleChangeEndereco} type="text"  id="complemento" className="form-control col-sm-3" placeholder={user.complemento}/>
            </div>
            <button onClick={handleSubmitEndereco} className="btn btn-success">Salvar Endereço</button>
        </form>

        <h2>Atualizar Endereço</h2>

        <form>
            <ul className="list-group">

                <li onClick={handleChangeMaterial} className="list-group-item list-group"  >
                 <div id='tipoAluminio' className="btn btn-success">aluminio</div>
                </li>

                <li onClick={handleChangeMaterial} className="list-group-item list-group" >
                <div id='tipoCobre' className="btn btn-success">cobre</div>
                </li>

                <li onClick={handleChangeMaterial} className="list-group-item list-group" > 
                <div id='tipoPlastico' className="btn btn-success">plastico</div>
                </li>
            </ul>

            <ul>
            <label>Seus materiais</label>
                <li style={{textTransform: "uppercase"}} className="list-group-item list-group-item-success">{lista.tipoAluminio}</li>
                <li style={{textTransform: "uppercase"}} className="list-group-item list-group-item-success">{lista.tipoCobre}</li>
                <li style={{textTransform: "uppercase"}} className="list-group-item list-group-item-success">{lista.tipoPlastico}</li>
            </ul>
        </form>
        <button onClick={ handleSubmitMaterial} className="btn btn-danger"><Link to='/perfil'>Cancelar</Link></button>
    </div>
    );
}
export default AtualizarPerfil