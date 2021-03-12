import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import {rotaPadrao} from '../../../dados/fetch'

import "./cadMaterial.css"

export default function FormCadMateriais() {
    const user = useSelector(state => state.user.dados[0])
    const [form, setForm] = useState(false)
    const dispatch = useDispatch()

    const handleChange = ({target}) => {
        const {id, value} = target
        setForm({...form, [id] : value})
    }

    const handleSubmit = (event) => {
        let heardes={
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege...'
        }
        
        event.preventDefault()
        axios.post(`${rotaPadrao}/${form.nome}/cad/id=${user.id}`, form, heardes)
        .then(axios.get(`${rotaPadrao}/materiais/busca/id=${user.id}`)
            .then(response => dispatch({type: "CARREGAR_MATERIAL", payload: response.data})))
    }

    return (
        <div className="cad-materiais">
            <form>
                <span>
                    <label htmlFor="nome" >Tipo</label><br />
                    <select onChange={handleChange} id="nome" required>
                        <option>SELECIONE</option>
                        <option value="aluminio">ALUMINIO</option>
                        <option value="cobre">COBRE</option>
                        <option value="plastico">PLASTICO</option>
                    </select>
                </span>

                <span>
                    <label htmlFor="descricao" >Descrição</label><br />
                    <input onChange={handleChange} type="text" placeholder="Nome e estado do material" id="descricao" required/>
                </span>

                <span>
                    <label htmlFor="valor" >Preço <span>*apenas estabelcimentos podem inserir preços</span></label><br />
                    {
                        user.atribuicao == "estabelecimento" ? <input onChange={handleChange} type="number" placeholder="Insira quanto você paga por material" id="valor" required />
                        :
                        <input onChange={handleChange} type="number" placeholder="Insira quanto você paga por material" id="valor" disabled />
                    }
                    
                </span>

                <span>
                    <label htmlFor="peso" >Peso</label><br />
                    <input onChange={handleChange} type="number" placeholder="Insira quanto você tem em material disponivel" id="peso" required />
                </span>

                <input type="submit" value="Cadastrar Material" className="btn btn-success" onClick={handleSubmit} />
            </form>
        </div>
    )
}