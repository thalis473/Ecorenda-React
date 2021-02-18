import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import './userPerf.css'
import { Link } from 'react-router-dom'

const AtualizarPerfil = () =>{
    const [material, setMaterial] = useState({})
    const [lista, setLista] = useState({})
    const handleClick = ({target}) => {
        const {id, textContent} = target
        setMaterial({...material, [id]: textContent})
        setLista({...lista, [id]: textContent })
        console.log(lista)
    }

    const [endereco, setEndereco] = useState({})
    const handleChange = ({target}) => {
        const {id, value} = target
        setEndereco({...endereco, [id]: value})
        console.log(endereco)
    }

    const [usuario, setUsuario] = useState({})
    const handleChangeUser = ({target}) => {
        const {id, value} = target
        setUsuario({...usuario, [id]: value})
        console.log(usuario)
    }

    const user = useSelector(state => state.user.dados)

    return(
    <div className="container">

        <h2>Atualizar Dados Pessoais</h2>

        <div className="view-frm">
            <form>
                <div className="form-group">
                    <label htmlFor="nome">Seu Nome</label>
                    <input onChange={handleChangeUser} type="text" value={user.nome} className="form-control col-sm-9 " id="nome" placeholder="Nome"/>

                    <label htmlFor="email">E-mail</label>
                    <input onChange={handleChangeUser} type="text" value={user.email}  id="email" className="form-control col-sm-9"/>

                    <label htmlFor="atribuicao">Atribuição</label>
                    <input onChange={handleChangeUser} type="text" value={user.atribuicao}  id="atribuicao" className="form-control col-sm-9" disabled/>
                </div>
                <button className="btn btn-success">Salvar dados pessoais</button>
            </form>
        </div>

        <h2>Atualizar Endereço</h2>
        <form>
            <div className="form-group">
                <label htmlFor="estado">Estado</label>
                <select onChange={handleChange} id="estado" className="form-control col-sm-3">
                    <option>SELECIONE</option>
                    <option value="rj" >Rio de janeiro</option>
                </select>

                <label htmlFor="bairro">Bairro</label>
                <input onChange={handleChange} type="text"  id="bairro" className="form-control col-sm-3"/>

                <label htmlFor="rua">Rua</label>
                <input onChange={handleChange} type="text"  id="rua" className="form-control col-sm-3"/>

                <label htmlFor="num">Número</label>
                <input onChange={handleChange} type="text"  id="num" className="form-control col-sm-3"/>

                <label htmlFor="complemento">Complemento</label>
                <input onChange={handleChange} type="text"  id="complemento" className="form-control col-sm-3"/>
            </div>
            <button className="btn btn-success">Salvar Endereço</button>
        </form>

        <h2>Atualizar Endereço</h2>

        <form>
            <ul className="list-group">

                <li onClick={handleClick} className="list-group-item list-group"  >
                 <div id='tipoAluminio' className="btn btn-success">aluminio</div>
                </li>

                <li onClick={handleClick} className="list-group-item list-group" >
                <div id='tipoCobre' className="btn btn-success">cobre</div>
                </li>

                <li onClick={handleClick} className="list-group-item list-group" > 
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
        <button className="btn btn-danger"><Link to='/perfil'>Cancelar</Link></button>
    </div>
    );
}
export default AtualizarPerfil;