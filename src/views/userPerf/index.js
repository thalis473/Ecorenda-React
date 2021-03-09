import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import axios from 'axios'
import {rotaPadrao} from '../../dados/fetch'
 import MaterialCard from '../../components/materialCard'
import { Link } from 'react-router-dom'
import './userPerf.css'

export default function UserPerf(props) {
    const user = useSelector(state => state.user.dados[0])
    const dispatch = useDispatch()

    useEffect(()=> {
        axios.get(`${rotaPadrao}/usersatt/email=${user.email}/senha=${user.senha}`)
        .then(response => dispatch({type: 'ATT', payload: response.data}))
    },[])
    
    console.log(user)
    return (
        <div className="user-perf">
            <section>
                <div className="info-g">
                    <div><img className="profile-icon" src={require(`../../img/icons/person.png`).default} alt="Foto de perfil" /></div>
                    <div>
                        <span>{user.nome}</span>
                        <span>Atribuição: {user.atribuicao}</span>
                        <button className="rota-alterar"><Link to='/atualizar'>Atualize seu cadastro</Link></button>
                    </div>
                </div>
                <div className="info-c">
                    <span>Informações de contato</span>
                    <span>Telefone: {user.telefone}</span>
                    <span>Celular: {user.celular}</span>
                    <span>E-mail: {user.email}</span>
                </div>
            </section>

            <section>
                <div>
                    <h2>Localização</h2>
                    <span>Estado: {user.estado}</span>
                    <span>Bairro: {user.bairro}</span>
                    <span>Rua: {user.rua}</span>
                    <span>Num: {user.num}</span>
                    <span>Complemento: {user.complemento}</span>
                </div>

                <div>
                    <h2>Descrição</h2>
                    <span>{user.descricao}</span>
                </div>
            </section>

            <section>
                <MaterialCard />
                {/* <MaterialCard /> */}
            </section>
        </div>
    )
}