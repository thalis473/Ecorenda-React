import {useState} from 'react'


export default function CadMaterial() {
    const [material, setMaterial] = useState({})
    const [lista, setLista] = useState({})


    const handleClick = ({target}) => {
        const {id, textContent} = target
        setMaterial({...material, [id]: textContent})
        setLista({...lista, [id]: textContent })
        console.log(lista)
    }

    return (
        <div className="form-group">
                <label>Selecione o material desejado</label>

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
        </div>
    )
}