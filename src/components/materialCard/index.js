import {useSelector, useDispatch} from 'react-redux'
import React from 'react'

import Material from '../material'
import FormAgendamento from '../form/agendamento'

import './materialCard.css'

const padrao = {nome: "Nenhum", valor: 0.00, peso: 0.000, descricao: "Nada cadastrado"}

export default function MaterialCard(){
    const dispatch = useDispatch()
    const reducer = useSelector(state => state.materiais.dados)

    const handleClick = (target) => {
        dispatch({type: "ENVIAR_MATERIAIS", payload: {target: target, render: <FormAgendamento />}})
    }
    
    return (
       <div className="material-card">
           <p>Seus Materiais</p>
           <div className='material-group'>
               {reducer.materiais ? reducer.materiais.map(item => item.descricao != null ? <span onClick={()=> handleClick(item)}><Material dados={item} /></span> : <Material dados={padrao} /> ) : <Material dados={padrao} />}
           </div>
        </div>

       
    )
}
