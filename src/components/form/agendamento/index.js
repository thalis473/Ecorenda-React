import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'

import './agendamento.css'

export default function FormAgendamento() {
    const selecionado = useSelector(state => state.selecionado)
    const user = useSelector(state => state.user)
    const agendamento = useSelector(state => state.agendamento)
    const dispatch = useDispatch()
    let opt = []
    for(let i= 9; i< 22; i++) {
      opt.push(<option value={i}>{i}:00</option>)  
    }

    const [dados, setDados] = useState({
        // fk_doador: selecionado.dados.id,
        // fk_catador: user.dados[0].id
        fk_doador: selecionado.dados,
        fk_catador: user.dados[0],
        nome_material: agendamento.materialSelecionado.nome,
        peso_material: agendamento.materialSelecionado.peso,
        valor_material: agendamento.materialSelecionado.valor,
        descricao_material: agendamento.materialSelecionado.descricao,
        ponto_de_coleta: `${selecionado.dados.bairro}, ${selecionado.dados.rua}, ${selecionado.dados.num}`,
        data_agendamento: false,
        hora_agendamento: false,
        peso_agendamento: false,
        valor_agendamento: false
    })

    const handleChange = ({target}) => {
        const {id, value} = target
        setDados({...dados, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: "SALVAR_AGENDAMENTO", payload: dados})
    }


    return(
        <form>
        <div className="container-agendamento">
            <div className="alinhamento">
            <div className="aside">
                <h3>Dados do Doador</h3>
                <span>
                    <label>Nome doador</label>
                    <input type="text" placeholder={dados.fk_doador.nome} disabled />
                </span>

                <span>
                    <label>Telefone</label>
                    <input type="text" placeholder={dados.fk_doador.telefone} disabled />
                </span>

                <span>
                    <label>Celular</label>
                    <input type="text" placeholder={dados.fk_doador.celular} disabled />
                </span>

                    <div className="container-material">
                        <span>
                            <label>Nome Material</label>
                            <input type="text" placeholder={dados.nome_material} disabled />
                        </span>
                        <span>
                            <label>Peso disponível</label>
                            <input type="text" placeholder={`${dados.peso_material}/kg`} disabled />
                        </span>
                        <span>
                            <label>Valor em média</label>
                            <input type="text" placeholder={`R$ ${dados.valor_material},00`} disabled />
                        </span>
                        <span>
                            <label>Descrição Material</label>
                            <input type="text" placeholder={dados.descricao_material} disabled />
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
                            <input onChange={handleChange} type="date" id='data_agendamento' required />
                        </span>
                        <span>
                            <label>Hora</label>
                            <select onChange={handleChange} id='hora_agendamento'>
                                {opt}
                            </select>
                        </span>
                    <div className="container-material">

                        <span>
                            <label>Peso </label>
                            <input onChange={handleChange} type="number" id='peso_agendamento' placeholder="ex: 0.500/kg" required />
                        </span>
                        <span>
                            <label>Valor </label>
                            <input onChange={handleChange} type="number" id='valor_agendamento' placeholder="ex: R$ 10,00" required />
                        </span>

                    </div>
            </div>

            </div>
            <div className="container-btn">
                <button onClick={(e)=> {
                    e.preventDefault()
                    dispatch({type: "FECHAR_AGENDAMENTO"})}} className="btn btn-danger">CANCELAR</button>

                <button onClick={handleSubmit} className="btn btn-success">CONFIRMAR</button>
            </div>

        </div>
        </form>
    )
}