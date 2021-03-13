import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { rotaPadrao } from '../../dados/fetch'
import { useEffect} from "react"
import {PerfilBox} from '../../components/perfil-box'
import './busca.css'
import PrintIcon from '@material-ui/icons/Print'

import { DimensionedMap } from "../../components/maps/index";


export default function ViewBusca() {
    const dispatch = useDispatch()
    const history = useHistory()
    const contatos = useSelector(state => state.contatos.dados)
    const selecionado = useSelector(state => state.selecionado)
    
    
    const get = async () => await axios.get(`${rotaPadrao}/enderecos`)
    useEffect(async ()=> {
        let response = await get()
        dispatch({type: "CARREGAR", payload: response.data})   
    }, [])


    const handleGetSelecionado = (info) => {
        axios.get(`${rotaPadrao}/users/id=${info.usuarioId}`)
        .then(response => dispatch({type: "CARREGAR_SELECIONADO", payload: response.data[0]}))
        .then(history.push('/selecionado'))
            
    }



    return (
        <div>

            <div>
                <div className="view-mapbox">
                    <DimensionedMap />
                </div>

                <span className="header-result-busca">
                    <h3 className="title"> Recém Cadastrados Próximos a você</h3> 
                    <button onClick={() => window.print()} className="btn-print" title="Imprima a relação "><PrintIcon/></button>
                </span>

                {contatos.map(item => item.atribuicao === "catador" || item.atribuicao === "adm" ? null : <span onClick={()=> handleGetSelecionado(item)}><PerfilBox key={item.id} dados={item} /></span>)}

            </div> 
        </div>
    )
}