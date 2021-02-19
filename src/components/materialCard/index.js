import {useSelector} from 'react-redux'
import React, { useState } from 'react'
import axios from 'axios'

import './materialCard.css'

export default function MaterialCard(props){
    const [material, setMaterial] = useState({})
    const [feedback, setFeedback] = useState({})
    const user = useSelector(state => state.user.dados)

    const heardes={
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'
    }
    const handleSubmit = (event) => {
        axios.post(`http://localhost:4000/agendamento/cad/id=${user.id}`, material,{headers:heardes})
    }

    const handleChangeUserMaterial = ({target}) => {
        const {id, value} = target
        setMaterial({...material, [id]: value})
    }
    const handleFedback = ({target}) => {
        const {id, value} = target
        setFeedback({...feedback,[id]: value})
        console.log(feedback)
    }
    return (
       <div >
            <form>
                <div className="form-group">

                    <label htmlFor="agendamento">Material que você pretende doar</label>
                    <select onChange={ handleChangeUserMaterial} id="material" className="form-control col-sm-9">
                        <option>SELECIONE</option>
                        <option value="aluminio">Alumínio</option>
                        <option value="cobre">Cobre</option>
                        <option value="plastico">Plastico</option>
                        <option value="vidro">Vidro</option>
                        <option value="papel">Papel</option>
                    </select>


                    <label htmlFor="localizacao">Local de encontro</label>
                    <input type="text" onChange={handleChangeUserMaterial} placeholder="Local disponivel " id="localizacao" className="form-control col-sm-9"/>

                    <label htmlFor="quantidade">Peso aproximado </label>
                    <input type="text" onChange={handleChangeUserMaterial}  placeholder="KG" id="quantidade" className="form-control col-sm-9" />
                    <div className="form-group">
                    <label htmlFor="obs">Observação</label>            
                        <textarea onChange={handleChangeUserMaterial} type="text" id="observacao" className="form-control col-sm-9" placeholder="Informe os horarios disponiveís para entrega "></textarea>
                </div>
                </div>
                <button  onClick={handleSubmit} className="btn btn-success">Confirmar contribuição</button>
            </form>
            <br/>
            <form>
                <div className="form-group">
                    <label htmlFor="local">Deixe seu Feedback</label>            
                        <textarea onChange={handleFedback} type="text" id="feedback" className="form-control col-sm-9"></textarea>
                </div>
                <button className="btn btn-success">Enviar</button>
            </form>
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