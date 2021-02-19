import {Link} from 'react-router-dom'

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import SpeedIcon from '@material-ui/icons/Speed'
import EventIcon from '@material-ui/icons/Event'
import EditIcon from '@material-ui/icons/Edit'

import "./menu.css"

export default function ViewMenu() {
    return (
        <section className="section-menu">
            <div>
            <h4><AssignmentIndIcon /> <Link to="/perfil">Pagina de perfil</Link> </h4>
            <h4><SpeedIcon /> <Link to="/adm">Dashboard ADM</Link> </h4>
            <h4><EventIcon /> <Link to="/agendamento">Agendamento</Link> </h4>
            <h4><EditIcon /> <Link to="/atualizar">Editar Perfil</Link> </h4>
            </div>
        </section>
    )
}