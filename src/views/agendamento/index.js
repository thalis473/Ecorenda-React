import React from 'react';
import {useSelector} from 'react-redux'
import PrintIcon from '@material-ui/icons/Print';
import CardAgendamento from '../../components/cardAgendamento';
import './agendamento.css';

import data from './agendamento.json';

export default function Index(){
    const agendamento = useSelector(state => state.user.dados[1])
    const usuario = useSelector(state => state.user.dados[0])
    console.log(agendamento)
    return(
        <div>
            <div className='view-header-agendamento'>
                <h2> Agendamentos</h2>
                <button onClick={() => window.print()} className="btn-print" title="Imprima a relação "><PrintIcon/></button>
            </div>
            <div className="view-agendamento">
                {
                    agendamento.map((agendamento, d) => 
                        <CardAgendamento
                        key={agendamento.idA} 
                        hora={agendamento.hora}    
                        data={agendamento.data}
                        material={agendamento.material}
                        quantidade={agendamento.quantidade}
                        nome={agendamento.doador}
                        pontoEncontro={agendamento.localizacao}
                        status={agendamento.status}
                        />     
                    )         
                }
            </div>
        </div>
    );
}