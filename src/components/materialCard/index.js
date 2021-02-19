import {useSelector} from 'react-redux'
import React, { useState } from 'react'
/*import Material from '../material'*/

import './materialCard.css'

export default function MaterialCard(props){
    const [material, setMaterial] = useState({})
    const [feedback, setFeedback] = useState({})
    const user = useSelector(state => state.user.dados)

   

    const handleChangeUserMaterial = ({target}) => {
        const {id, value} = target
        setMaterial({...material, [id]: value})
        console.log(material)
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
                    <label htmlFor="nome">Material que você pretende doar</label>
                    <input type="text" onChange={handleChangeUserMaterial} className="form-control col-sm-9 " id="nome" placeholder="nome do material"/>

                    <label htmlFor="local">local de encontro</label>
                    <input type="text" onChange={handleChangeUserMaterial} placeholder="Local disponivel " id="local" className="form-control col-sm-9"/>

                    <label htmlFor="atribuicao">Peso aproximado </label>
                    <input type="text" onChange={handleChangeUserMaterial}  placeholder="KG" id="atribuicao" className="form-control col-sm-9" />
                </div>
                <button  className="btn btn-success">Confirmar contribuição</button>
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