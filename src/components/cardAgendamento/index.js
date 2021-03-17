import './cardAgendamento.css';
import React, {useRef} from 'react';

const CardAgendamento = (props)=> {
    
    const divCard = useRef();
    var material =  'card-agendamento';
    var status =  'text-status';

    const handleMaterial = () =>{
        switch(props.material){
            case 'Alumínio' || 'Aluminio' || 'alumínio' || 'aluminio' || 'Cobre' || 'cobre':
                material +=  ' card-border-aluminio';
                break;
            case 'Vidro' || 'vidro':
                material +=' card-border-vidro';  
                break;
            case 'Papel' || 'papel':
                material +=  ' card-border-papel';  
                break;
            case 'Plástico' || 'Plastico' || 'plástico' || 'plastico':
                material += ' card-border-plastico';   
                break;
            default:
                material += '';   
                break;
        }
    }

    
    handleMaterial();

    return(
        <>
            <div ref={divCard} id="card-agendamento" className={material+' card-border-aluminio'}> 
                {/* <span className="title"> {props.dados.hora_agendamento} - {props.data}</span> */}
                
                <br/>
                <span> {props.dados.nome_material} : {props.dados.peso_agendamento}/kg </span><br/>
                <span > Doador: {props.dados.fk_doador.nome} </span><br/>
                <span > {props.dados.fk_catador.nome} </span><br/>
                <span> Ponto de Encontro : {props.dados.ponto_de_coleta} </span><br/>
               
                {/* <div className={status}>
                    <span > {props.status} </span>
                </div>
                
                { props.status === 'DISPONÍVEL' ? (
                    <div>
                        <button className="btn btn-success">RESERVAR</button>
                    </div>
                ): ''} */}

            </div>
        </>
    );
}
export default CardAgendamento;