import {useState} from 'react'

export default function CadEndereco() {
    const [endereco, setEndereco] = useState({})

    const handleChange = ({target}) => {
        const {id, value} = target
        setEndereco({...endereco, [id]: value})
        console.log(endereco)
    }

    return (
        <div className="form-group">
            <label htmlFor="estado">Estado</label>
            <select onChange={handleChange} id="estado" className="form-control col-sm-3">
                <option>SELECIONE</option>
                <option value="rj">Rio de janeiro</option>
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
    )
}