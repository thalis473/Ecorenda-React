import {useSelector} from 'react-redux'
// import MaterialCard from '../../components/materialCard'
import { Link } from 'react-router-dom'
import './userPerf.css'

export default function UserPerf(props) {
    const user = useSelector(state => state.user.dados)
    console.log(user)
    return (
        <div className="user-perf">
            <section>
                <div className="info-g">
                    <div><img className="profile-icon" src={require(`../../img/icons/person.png`).default} alt="Foto de perfil" /></div>
                    <div>
                        <span>{user.nome}</span>
                        <span>Atribuição: {user.atribuicao}</span>
                        <button><Link to='/atualizar'>Atualize seu cadastro</Link></button>
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
                    <span>CEP: {user.cep}</span>
                    <span>Estado: {user.estado}</span>
                    <span>Bairro: {user.bairro}</span>
                    <span>Rua: {user.rua}</span>
                    <span>Num: {user.num}</span>
                </div>

                <div>
                    <h2>Descrição</h2>
                    <span>{user.descricao}</span>
                </div>
            </section>

            <section>
                {/* <MaterialCard />
                <MaterialCard /> */}
            </section>
        </div>
    )
}