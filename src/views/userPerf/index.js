import {useSelector} from 'react-redux'
import MaterialCard from '../../components/materialCard'

import './userPerf.css'

export default function UserPerf(props) {
    const user = useSelector(state => state.user.dados)
    return (
        <div className="user-perf">
            <section>
                <div className="info-g">
                    <div><img className="profile-icon" src={require(`../../img/icons/person.png`).default} alt="Foto de perfil" /></div>
                    <div>
                        <span>{user.nome}</span>
                        <span>Atribuição: {user.atribuicao}</span>
                    </div>
                </div>
                <div className="info-c">
                    <span>Informações de contato</span>
                    <span>telefone: {user.telefone}</span>
                    <span>celular: {user.celular}</span>
                    <span>email: {user.emial}</span>
                </div>
            </section>

            <section>
                <div>
                    <h2>Localização</h2>
                    <span>cep: {user.localizacao.cep}</span>
                    <span>estado: {user.localizacao.estado}</span>
                    <span>bairro: {user.localizacao.bairro}</span>
                    <span>rua: {user.localizacao.rua}</span>
                    <span>num: {user.localizacao.num}</span>
                </div>

                <div>
                    <h2>Descrição</h2>
                    <span>{user.desc}</span>
                </div>
            </section>

            <section>
                <MaterialCard />
                <MaterialCard />
            </section>
        </div>
    )
}