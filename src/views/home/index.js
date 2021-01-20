import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import EcoIcon from '@material-ui/icons/Eco';
import PersonPinIcon from '@material-ui/icons/PersonPin';


import './home.css'

export default function ViewHome() {
    return(
        <div className="view-home">
            <section>
                <h1>Seja bem vindo ao <span className="destaque">Eco<span className="destaque-alt">Renda!</span></span></h1>
                <p>Otimizando o trabalho dos catadores de materiais recicláveis</p>
            </section>

            <section>
                <div>
                    <h2 className="destaque">O problema</h2>
                    
                        <p>Um grupo que passa despercebido pela sociedade e que está envolvido diretamente com o processo de
                            reciclagem de resíduos é o dos <span className="destaque">catadores.</span></p>

                         <p className="subtitle">MAIS DE 100 PONTOS VICIADOS EM LIXO EM NOVA IGUAÇU</p>

                        <p>(Locais que constantemente são utilizados para realizar descartes incorretos.)</p>
                        
                    
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
        </div>
    )
}