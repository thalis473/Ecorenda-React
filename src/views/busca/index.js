import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import { useEffect} from "react"
import {PerfilBox} from '../../components/perfil-box'
import './busca.css'
import PrintIcon from '@material-ui/icons/Print'

import { DimensionedMap } from "../../components/maps/index";


export default function ViewBusca() {
    const dispatch = useDispatch()
    const contatos = useSelector(state => state.contatos.dados)
    
    
    const get = async () => await axios.get("http://localhost:4000/enderecos")
    useEffect(async ()=> {
        let response = await get()
        console.log(response.data)
        dispatch({type: "CARREGAR", payload: response.data})
        
    }, [])


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

                {contatos.map(item => item.atribuicao === "catador" || item.atribuicao === "adm" ? null : <PerfilBox key={item.id} dados={item} />)}

            </div> 
        </div>
    )
}