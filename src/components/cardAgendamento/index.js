import './cardAgendamento.css';
import React, {useRef} from 'react';

const CardAgendamento = (props)=> {
    
    const divCard = useRef();
    var material =  'card-agendamento';
    var status =  'text-status';

    const handleMaterial = () =>{
        switch(props.material){
            case 'Alumínio':
                material +=  ' card-border-aluminio';
                break;
            case 'Vidro':
                material +=' card-border-vidro';  
                break;
            case 'Papel':
                material +=  ' card-border-papel';  
                break;
            case 'Plástico':
                material += ' card-border-plastico';   
                break;
            default:
                material += '';   
                break;
        }
    }

    // const handleStatus = () => {
       
    //     switch(props.status){
    //         case 'CONFIRMADO':
    //            status += ' status-confirmado';
    //             break;
    //         case 'PENDENTE':
    //             status += ' status-pendente';  
    //             break;
    //         case 'CANCELADO':
    //             status += ' status-cancelado';  
    //             break;
    //         case 'CONCLUIDO':
    //             status +=' status-concluido';   
    //             break;
    //         default:
    //             status += '';   
    //             break;
    //     }
    // }
     
    // handleStatus();
    handleMaterial();

    return(
        <>
            <div ref={divCard} id="card-agendamento" className={material}> 
                <span className="title"> {props.hora} - {props.data}</span>
                <span aria-hidden="true">&times;</span>
                <br/>
                <span> {props.material} : {props.quantidade} </span><br/>
                <a href={props.linkPerfil} rel="noreferrer noopener" target="_blank"><span title="Ver Perfil"> {props.categoria} : {props.nome} </span></a><br/>
                <span> Ponto de Encontro : {props.pontoEncontro} </span><br/>
               
                <div className={status}>
                    <span > {props.status} </span>
                </div>
            </div>
        </>
    );
}
export default CardAgendamento;