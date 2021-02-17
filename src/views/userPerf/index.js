import {useSelector} from 'react-redux'
// import MaterialCard from '../../components/materialCard'

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
                    </div>
                </div>
                <div className="info-c">
                    <span>Informações de contato</span>
                    <span>telefone: {user.telefone}</span>
                    <span>celular: {user.celular}</span>
                    <span>email: {user.email}</span>
                </div>
            </section>

            <section>
                <div>
                    <h2>Localização</h2>
                    <span>cep: {user.cep}</span>
                    <span>estado: {user.estado}</span>
                    <span>bairro: {user.bairro}</span>
                    <span>rua: {user.rua}</span>
                    <span>num: {user.num}</span>
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