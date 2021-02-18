import React from 'react';
import PrintIcon from '@material-ui/icons/Print';
import CardAgendamento from '../../components/cardAgendamento';
import './agendamento.css';

import data from './agendamento.json';

export default function Index(){
    return(
        <div>
            <div className='view-header-agendamento'>
                <h2> Agendamentos</h2>
                <button onClick={() => window.print()} className="btn-print" title="Imprima a relação "><PrintIcon/></button>
            </div>
            <div className="view-agendamento">
                {
                    data.map((data, d) => 
                        <CardAgendamento
                        key={d} 
                        hora={data.hora}    
                        data={data.data}
                        material={data.material}
                        quantidade={data.quantidade}
                        categoria={data.categoria}
                        nome={data.nome}
                        linkPerfil={data.linkPerfil}
                        pontoEncontro={data.pontoEncontro}
                        status={data.status}
                        />     
                    )         
                }
            </div>
        </div>
    );
}