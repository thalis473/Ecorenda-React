import LocationOnIcon from '@material-ui/icons/LocationOn'

import './perfil-box.css'

export function PerfilBox(props) {
    return (
        <div className="perfil-box">
            <div className="perfil-box-left">
                <span className="perfil-box-label"><img src="#" alt="Foto de perfil" /></span>
                <span className="perfil-box-label">{props.dados.perfilType}</span>
            </div>
            <div className="perfil-box-midle">
                <span className="perfil-box-label"> {props.dados.name}</span>
                <span className="perfil-box-label"> <LocationOnIcon />{props.dados.location}</span>
            </div>
            <div className="perfil-box-right desk-view">
                <span className="perfil-box-label">Recursos <br/>
                <img src="#" alt={props.dados.resources} />
                </span>
            </div>
        </div>
    )
}