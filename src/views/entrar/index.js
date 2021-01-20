import Login from '../../components/form/login/index'
import Cadastro from '../../components/form/cadastro/index'
import './entrar.css'


export default function ViewEntrar() {
    return (
        <div id="view-entrar">
            <div className="container-form">
                <Login /> 
            </div>
            <div className="container-form">
                <Cadastro />
            </div>
        </div>
    )
}