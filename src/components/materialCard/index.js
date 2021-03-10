import {useSelector} from 'react-redux'
import React, { useState } from 'react'

import Material from '../material'

import './materialCard.css'

const padrao = {nome: "Nenhum", valor: 0.00, peso: 0.000, descricao: "Nada cadastrado"}

export default function MaterialCard(){
    const reducer = useSelector(state => state.materiais.dados)
    
    return (
       <div className="material-card">
           <p>Seus Materiais</p>
           <div className='material-group'>
               {reducer.materiais ? reducer.materiais.map(item => item.descricao != null ? <Material dados={item} /> : <Material dados={padrao} /> ) : <Material dados={padrao} />}
           </div>
        </div>

       
    )
}


/* tirei de dentro do return
 <div className="material-card">
<p>{props.rotulo}</p>
            <div className="material-group">
                {user.materiais.map(item => <Material key={item.id} dados={item} />)}
 </div>
</div>*/