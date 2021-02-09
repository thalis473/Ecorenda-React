import {useSelector} from 'react-redux'

import MaterialCard from '../../components/materialCard'
import {PerfilBox} from '../../components/perfil-box'
import FormBuscar from '../../components/form/busca'

import './userHome.css'

export default function UserHome() {
    const contatos = useSelector(state => state.contatos.dados)

    return (
        <div className="user-home">
            <MaterialCard rotulo="Recursos Disponíveis"/>
            <MaterialCard rotulo="Valores do dia"/>
            <div id="container-favoritos">
                <div id="container-filtro">
                    <FormBuscar />
                </div>
                <div id="container-lista">
                    {contatos.map(item => <PerfilBox key={item.nome} dados={item} />)}
                </div>
            </div>
        </div>
    )
}