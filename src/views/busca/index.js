import {useSelector} from 'react-redux'
import FormBuscar from '../../components/form/busca'
import {PerfilBox} from '../../components/perfil-box'
import './busca.css'

export default function ViewBusca() {
    const contatos = useSelector(state => state.contatos.dados)
    
    return (
        <div>
            <div>
            <FormBuscar />
            {contatos.map(item => <PerfilBox key={item.nome} dados={item} />)}
            </div> 
        </div>
    )
}