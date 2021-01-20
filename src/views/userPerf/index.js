import MaterialCard from '../../components/materialCard'

import './userPerf.css'

export default function UserPerf(props) {
    return (
        <div className="user-perf">
            <section>
                <div className="info-g">
                    <div><img src='#' alt="profile image" /></div>
                    <div>
                        <span>Nome do usuario</span>
                        <span>Atribuição</span>
                        <span>rating</span>
                    </div>
                </div>
                <div className="info-c">
                    <span>Informações de contato</span>
                    <span>telefone</span>
                    <span>celular</span>
                    <span>email</span>
                </div>
            </section>

            <section>
                <div>
                    <h2>Localização</h2>
                    <span>cep</span>
                    <span>estado</span>
                    <span>bairro</span>
                    <span>rua</span>
                    <span>num</span>
                </div>

                <div>
                    <h2>Descrição</h2>
                    <span>Breve descrição do usuario</span>
                </div>
            </section>

            <section>
                <MaterialCard />
                <MaterialCard />
            </section>
        </div>
    )
}