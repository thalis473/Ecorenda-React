import {useState, useEffect} from 'react'

import CadUsuario from './usuario'
import CadEndereco from './endereco'
import CadMaterial from './material'

import './cadastro.css'
import Autorizacao from './autorizacao/index'


export default function FormCadastro() {
    const etapas = [<CadUsuario />, <CadEndereco />, <CadMaterial />]
    const [component, setComponent] = useState(etapas[0])

    const handleNext = (target) => {
        if(component === etapas[0]) {
            setComponent(etapas[1])
        }else {
            console.log(target)
            target.className = "d-none"
            setComponent(etapas[2]) 
        }
    }

    return(   
    <div className="container">
        <h1>Cadastro</h1>
        <div className="container form-group">
            {component}

            <button onClick={handleNext} className="btn btn-success">PROXIMO</button> 
        </div>
    </div>
    )
}