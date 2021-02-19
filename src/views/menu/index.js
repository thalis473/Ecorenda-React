import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import SpeedIcon from '@material-ui/icons/Speed'
import EventIcon from '@material-ui/icons/Event'
import EditIcon from '@material-ui/icons/Edit'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import "./menu.css"

export default function ViewMenu() {
    const user = useSelector(state => state.user.dados[0])
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(()=> {
        axios.get(`http://localhost:4000/usersatt/email=${user.email}/senha=${user.senha}`)
        .then(response => dispatch({type: 'ATT', payload: response.data[0]}))
    },[])

    const handleExit = ()=> {
        dispatch({type: "LOGOUT", action: null})
        history.push("/")
    }

    return (
        <section className="section-menu">
            {user.atribuicao === "adm"
            ?
            <div>
                <h4><SpeedIcon /> <Link to="/adm">Dashboard ADM</Link> </h4>
                <h4><AssignmentIndIcon /> <Link to="/perfil">Pagina de perfil</Link> </h4>
                <h4 onClick={handleExit}><ExitToAppIcon /> <Link>Sair</Link></h4>
            </div>
            
            :
            <div>
            <h4><AssignmentIndIcon /> <Link to="/perfil">Pagina de perfil</Link> </h4>
            <h4><EventIcon /> <Link to="/agendamento">Agendamento</Link> </h4>
            <h4><EditIcon /> <Link to="/atualizar">Editar Perfil</Link> </h4>
            <h4 onClick={handleExit}><ExitToAppIcon /> <Link>Sair</Link></h4>
            </div>
            }
        </section>
    )
}