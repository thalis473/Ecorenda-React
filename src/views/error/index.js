import {Link} from 'react-router-dom'


export default function ViewError() {
    return (
        <section>
            <h1>Error 404 : rota não encontrada</h1>
            <h4>Clique <Link to="/home">aqui</Link> para voltar á páginha inicial</h4>


        </section>
    )
}