import {Link} from 'react-router-dom'


export default function ViewMenu() {
    return (
        <section>
            <h1>Error 404 : rota não encontrada</h1>
            <h4> <Link to="/user">Pagina de usuario</Link> </h4>
            <h4> <Link to="/perfil">Pagina de perfil</Link> </h4>
            <h4> <Link to="/adm">Dashboard ADM</Link> </h4>
            <h4> <Link to="/agendamento">Agendamento</Link> </h4>
        </section>
    )
}