import {useDispatch} from 'react-redux'

import './agendamento.css'

export default function FormAgendamento() {
    const dispatch = useDispatch()
    let opt = []
    for(let i= 9; i< 22; i++) {
      opt.push(<option value={i}>{i}:00</option>)  
    }
    return(
        <form>
        <div className="container-agendamento">
            <div className="alinhamento">
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
                            <label>Peso disponível</label>
                            <input type="text" placeholder="Numero aqui" disabled />
                        </span>
                        <span>
                            <label>Valor em média</label>
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
                            <label>Ponto de coleta</label>
                            <input type="text" placeholder="Numero aqui" disabled />
                        </span>
                        <span>
                            <label>Data</label>
                            <input type="date" required />
                        </span>
                        <span>
                            <label>Hora</label>
                            <select>
                                {opt}
                            </select>
                        </span>
                    <div className="container-material">

                        <span>
                            <label>Peso </label>
                            <input type="number" placeholder="ex: 0.500/kg" required />
                        </span>
                        <span>
                            <label>Valor </label>
                            <input type="number" placeholder="ex: R$ 10,00" required />
                        </span>

                    </div>
            </div>

            </div>
            <div className="container-btn">
                <button onClick={(e)=> {
                    e.preventDefault()
                    dispatch({type: "FECHAR_AGENDAMENTO"})}} className="btn btn-danger">CANCELAR</button>
                <button className="btn btn-success">CONFIRMAR</button>
            </div>

        </div>
        </form>
    )
}