import {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';


import './cadastro.css'


export default function FormCadastro() {
    const [usuario, setUsuario] = useState({})

    const history = useHistory()
   
    const handleChangeUsuario = ({target}) => {
        const {id, value} = target
        setUsuario({...usuario, [id]: value})
 }
 const heardes={
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...'
}

   

    const handleSubmit = (event) => {
        axios.post('http://localhost:4000/users/cad', usuario,{headers:heardes})
        .then((result) => {
            /*colocar um alert para o usuario antes de envialo para a home*/
            history.push("/");
        })
        .catch((error) => {
           /*msg avisando*/
         })
         
        
      }

    return(   
    <div className="container">
        <h1>Cadastro</h1>
        <div className="container form-group">

        <label htmlFor="nome">Seu Nome</label>
                <input onChange={ handleChangeUsuario} type="text" className="form-control col-sm-6" id="nome" placeholder="Nome"/>

                <label htmlFor="email">E-mail</label>
                <input onChange={ handleChangeUsuario} type="text"  id="email" className="form-control col-sm-3"/>

                <label htmlFor="senha">Senha</label>
                <input onChange={ handleChangeUsuario} type="password"  id="senha" className="form-control col-sm-3"/>                       

                <label htmlFor="atribuicao">Atribuição</label>
                <select onChange={ handleChangeUsuario} id="atribuicao" className="form-control col-sm-3">
                    <option>SELECIONE</option>
                    <option value="catador">Catador</option>
                    <option value="doador">Doador</option>
                    <option value="estabelecimento">Estabelecimento</option>
                </select>
        
         
           
        </div>
       <button onClick={ handleSubmit } className="btn btn-success">Cadastrar</button>
    </div>
    )
}

/*onClick={handleNext } */

