import './material.css'

export default function Material() {
    return (
    <div className="material">
        <div>
        <img className="material-icon" src={require('../../img/icons/papel.png').default} alt="material Icone" />
        </div>
        <div>
            <span className="material-rotulo">Papel</span><br/>
            <span className="material-valor">valor</span>
            <span className="material-unidade">unidade</span>
        </div>
    </div>
    )
}

