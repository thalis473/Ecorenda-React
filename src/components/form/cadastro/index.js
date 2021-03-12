import {useState} from 'react'
import { useHistory } from 'react-router-dom';
import {useSelector} from 'react-redux'

import EtapaUser from './etapas/user'
import EtapaEndereco from './etapas/endereco'

import './cadastro.css'


export default function FormCadastro() {
    const reducer = useSelector(state => state.user)
    const [etapa, setEtapa] = useState(<EtapaUser />)
    const [btnClass, setBtnClass] = useState("inline-block")
    const history = useHistory()
    
    
    const heardes={
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'
    }  
    
    const handleNext = (event) => {
        event.preventDefault()
        if(reducer.dadosCadastroUser != false) {
            setEtapa(<EtapaEndereco />)
            setBtnClass('none')
        } else {
            alert("Ops... Parece que você esqueceu algum campo em branco.")
        }
    }

    return(   
    <div className="container">
        <h1>Cadastro</h1>
        <form>
            {etapa}
        </form>
        <button onClick={ handleNext } className="btn btn-success" style={{display: btnClass}}>Próximo</button>
    </div>
    )
}


