import {useDispatch} from 'react-redux'

import './agendamento.css'

export default function FormAgendamento() {
    const dispatch = useDispatch()

    return(
        <div className="container-agendamento">
            <form>
            <div className="aside">
                <h3>Dados do Doador</h3>
                <span>
                    <label>Nome doador</label>
                    <input type="text" placeholder="Nome aqui" disabled />
                </span>

                <span>
                    <label>Telefone</label>
                    <input type="text" placeholder="Numero aqui" disabled />
                </span>

                <span>
                    <label>Celular</label>
                    <input type="text" placeholder="Numero aqui" disabled />
                </span>

                    <div className="container-material">
                        <span>
                            <label>Nome Material</label>
                            <input type="text" placeholder="Numero aqui" disabled />
                        </span>
                        <span>
                            <label>Peso Material</label>
                            <input type="text" placeholder="Numero aqui" disabled />
                        </span>
                        <span>
                            <label>Valor Material</label>
                            <input type="text" placeholder="Numero aqui" disabled />
                        </span>
                        <span>
                            <label>Descrição Material</label>
                            <input type="text" placeholder="Numero aqui" disabled />
                        </span>
                    </div>
                </div>

            <div className="aside">
                <h3>Dados do agendamento</h3>
                        <span>
                            <label>Endereço</label>
                            <input type="text" placeholder="Numero aqui" required />
                        </span>
                    <div className="container-material">
                    <span>
                            <label>Nome Material</label>
                            <input type="text" placeholder="Numero aqui" required />
                        </span>
                        <span>
                            <label>Peso Material</label>
                            <input type="text" placeholder="Numero aqui" required />
                        </span>
                        <span>
                            <label>Valor Material</label>
                            <input type="text" placeholder="Numero aqui" required />
                        </span>
                        <span>
                            <label>Descrição Material</label>
                            <input type="text" placeholder="Numero aqui" required />
                        </span>
                    </div>
            </div>

            <div className="aside">
                <button onClick={(e)=> {
                    e.preventDefault()
                    dispatch({type: "FECHAR_AGENDAMENTO"})}} className="btn btn-danger">FECHAR</button>
                <button className="btn btn-success">CONFIRMAR AGENDAMENTO</button>
            </div>
            </form>
        </div>
    )
}