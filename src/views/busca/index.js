import {useSelector} from 'react-redux'
// import FormBuscar from '../../components/form/busca'
import {PerfilBox} from '../../components/perfil-box'
import './busca.css'
import PrintIcon from '@material-ui/icons/Print'

import { DimensionedMap } from "../../components/maps/index";


export default function ViewBusca() {
    const contatos = useSelector(state => state.contatos.dados)
    
    return (
        <div>
            <div>
                {/* <FormBuscar /> */}

                <div className="view-mapbox">
                    <DimensionedMap />
                </div>

                <span className="header-result-busca">
                    <h3 className="title"> Recém Cadastrados Próximos a você</h3> 
                    <button onClick={() => window.print()} className="btn-print" title="Imprima a relação "><PrintIcon/></button>
                </span>

                {contatos.map(item => <PerfilBox key={item.nome} dados={item} />)}

            </div> 
        </div>
    )
}