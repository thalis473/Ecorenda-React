import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'
import axios from 'axios'
import {rotaPadrao} from '../../dados/fetch'
import {useHistory} from 'react-router-dom'

import CloseIcon from '@material-ui/icons/Close'
import MaterialCard from '../../components/materialCard'

import "./selecionado.css"

export default function ViewSelecionado() {
    const selecionado = useSelector(state => state.selecionado)
    const dispatch = useDispatch()
    const history = useHistory()
    const [user, setUser] = useState(selecionado.dados)

    useEffect(() => {
        setUser(selecionado.dados)
        axios.get(`${rotaPadrao}/materiais/busca/id=${selecionado.dados.id}`)
        .then(response => dispatch({type: "CARREGAR_MATERIAL", payload: response.data}))
    })


    return (
    <>
        {user != false ? 
            (<div className="user-selecionado">
            <section><button onClick={()=> history.push("/buscar")} className="btn-fechar"><CloseIcon /></button></section>
            <section>
                <div className="info-g">
                    <div><img className="profile-icon" src={require(`../../img/icons/person.png`).default} alt="Foto de perfil" /></div>
                    <div>
                        <span>{user.nome}</span>
                        <span>Atribuição: {user.atribuicao}</span>
                    </div>
                </div>
                <div className="info-c">
                    <span>Informações de contato</span>
                    <span>Telefone: {user.telefone}</span>
                    <span>Celular: {user.celular}</span>
                    <span>E-mail: {user.email}</span>
                </div>
            </section>

            <section>
                <div>
                    <h2>Localização</h2>
                    <span>Estado: {user.estado}</span>
                    <span>Bairro: {user.bairro}</span>
                    <span>Rua: {user.rua}</span>
                    <span>Num: {user.num}</span>
                    <span>Complemento: {user.complemento}</span>
                </div>

                <div>
                    <h2>Descrição</h2>
                    <span>{user.descricao}</span>
                </div>
            </section>
            <section><MaterialCard /></section>
        </div>)
        :
        <p>Erro 404</p>
        }
    </>
    )
}