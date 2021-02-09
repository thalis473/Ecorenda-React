import './material.css'

export default function Material(props) {
    return (
    <div className="material">
        <div>
        <img className="material-icon" src={require('../../img/icons/papel.png').default} alt="material Icone" />
        </div>
        <div>
            <span className="material-rotulo">{props.dados.nome}</span><br/>
            <span className="material-valor">{props.dados.valor}</span>
            <span className="material-unidade">{props.dados.peso}</span>
        </div>
    </div>
    )
}

