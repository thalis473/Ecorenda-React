import './material.css'

export default function Material(props) {
    return (
    <div className="material">
        <div>
        <img className="material-icon" src={require('../../img/icons/papel.png').default} alt="material Icone" />
        </div>
        <div>
            <span className="material-rotulo">{props.dados.nome}</span><br/>
            <div className="unidades">
                <span className="material-valor">R$ {props.dados.valor}</span>
                <span className="material-unidade">kg/ {props.dados.peso}</span>
            </div>
            <span className="material-desc">Descrição: {props.dados.descricao}</span>
        </div>
    </div>
    )
}

