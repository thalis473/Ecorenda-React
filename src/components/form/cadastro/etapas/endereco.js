import axios from 'axios'
import {rotaPadrao} from '../../../../dados/fetch'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'


export default function EtapaEndereco() {
    const reducer = useSelector(state => state.user)
    const [usuario, setUsuario] = useState({})
    const history = useHistory()
    const dispatch = useDispatch()

    const handleChangeUsuario = ({target}) => {
        const {id, value} = target
        setUsuario({...usuario, [id]: value})
 }
 const heardes={
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...'
}  
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({type: "CAD_END", payload: usuario})

    }

    const handleCad = (event) => {
        event.preventDefault()
        if(reducer.dadosCadastroUser != false && reducer.dadosCadastroEnd != false){
            axios.post(`${rotaPadrao}/users/cad`, reducer.dadosCadastroUser, heardes)
            .then(response => {
                axios.post(`${rotaPadrao}/enderecos/cad/id=${response.data.log.insertId}`, reducer.dadosCadastroEnd, heardes)
                axios.post(`${rotaPadrao}/materiais/cad/id=${response.data.log.insertId}`, heardes)
            })
            .then(alert("Usuario cadastrado com sucesso! Por favor efetue o login."))
        }else{
            alert("Ops... Parece que você esqueceu algum campo em branco.");
        }
    }

    return (
        <div className="container form-group">
            <label htmlFor="estado">Estado</label>
                <select onChange={ handleChangeUsuario} id="estado" className="form-control col-sm-9">
                    <option>SELECIONE</option>
                    <option value="rj">Rio de Janeiro</option>
                </select>

            <label htmlFor="bairro">Bairro</label>
                <input onChange={ handleChangeUsuario} type="text" className="form-control col-sm-9" id="bairro" required/>

            <label htmlFor="rua">Rua</label>
                <input onChange={ handleChangeUsuario} type="text"  id="rua" className="form-control col-sm-9" required/>

            <label htmlFor="num">Numero</label>
                <input onChange={ handleChangeUsuario} type="number"  id="num" className="form-control col-sm-9" required/>

            <label htmlFor="complemento">Complemento</label>
                <input onChange={ handleChangeUsuario} type="text"  id="complemento" className="form-control col-sm-9" value="Não tem" />                         

            <br />
                <button onClick={ handleSubmit } className="btn btn-success">Confirmar</button>
            <br />
            <br />
            <button onClick={ handleCad } className="btn btn-success">Finalizar Cadastro</button>
        </div>
    )
}