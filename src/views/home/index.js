import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import EcoIcon from '@material-ui/icons/Eco';
import PersonPinIcon from '@material-ui/icons/PersonPin';


import './home.css'

export default function ViewHome() {
    return(
        <>
            <section>
                <h1>Seja bem vindo ao <span className="destaque">Eco<span className="destaque-alt">Renda!</span></span></h1>
                <p>Otimizando o trabalho dos catadores de materiais recicláveis</p>
            </section>

            <section>
                <div>
                    <h2 className="destaque">O problema</h2>

                    <ul>
                        <li className="subtitle"><span className="destaque">79</span> milhôes de toneladas</li>
                        <p>de resíduos gerados em 2018</p>
                        <li className="subtitle"><span className="destaque">380</span> Kg/ano</li>
                        <p>foi a geração média de RSU por pessoa</p>
                        <li className="subtitle"><span className="destaque">29,9</span> milhoes de toneladas</li>
                        <p>De RSU foram despejados inadequadamente
                        em lixões sem nenhuma proteção ao meio
                        ambiente.</p>
                    </ul>
                </div>

                <div>
                    <h2 className="destaque">A solução</h2>
                    <p>O EcoRenda tem como proposta
                    otimizar o trabalho de catadores
                    indicando a eles pontos de coleta de
                    materiais específicos e também
                    estabelecimentos para compra
                    desses materiais.</p>
                </div>
            </section>
            
            <section>
                <h2 className="destaque">Como funciona?</h2>
                <p>
                    Com o EcoRenda, o catador conseguirá saber onde
                    há um doador do material desejado próximo a ele e
                    também a quantidade disponível. Podendo, então,
                    agendar a coleta. Tornando o processo de coleta
                    mais rápido e eficaz .
                </p>
                <div className="agentes-blocos-area">
                    <span className="agentes-bloco">
                        <h3><PersonPinIcon/><br/>Doador</h3>
                        <p>É a pessoa que disponibiliza
                        certos materiais recicláveis
                        para um catador, e os
                        entrega em um local
                        acordado entre eles (ponto
                        de coleta).</p>
                    </span>
                    <span className="agentes-bloco">
                        <h3><DirectionsWalkIcon/><br/>Catador</h3>
                        <p>É a pessoa que se dispõe a
                        transportar o material do
                        ponto de coleta até o
                        estabelecimento comercial
                        que o compre.</p>
                    </span>
                    <span className="agentes-bloco">
                        <h3><EcoIcon/><br/>Estabelecimento</h3>
                        <p>Trata-se de um
                        estabelecimento comercial cujo
                        propósito, para fins da
                        aplicação, é comprar os
                        materiais recicláveis em posse
                        do catador e dar-lhes uma
                        destinação ecologicamente
                        correta.</p>
                    </span>
                </div>
            </section>
        </>
    )
}