import LocationOnIcon from '@material-ui/icons/LocationOn'

import './perfil-box.css'

export function PerfilBox(props) {
    return (
        <div className="perfil-box">
            <div className="perfil-box-left">
                <span className="perfil-box-label"><img src="#" alt="Foto de perfil" /></span>
                <span className="perfil-box-label">{props.dados.atribuicao}</span>
            </div>
            <div className="perfil-box-midle">
                <span className="perfil-box-label"> {props.dados.nome}</span>
                <span className="perfil-box-label"> <LocationOnIcon />{props.dados.bairro} {props.dados.rua} {props.dados.num}</span>
            </div>
            <div className="perfil-box-right desk-view">
                <span className="perfil-box-label">Recursos <br/>
                <img src="#" alt={props.dados.recursos} />
                </span>
                
            </div>
        </div>
    )
}