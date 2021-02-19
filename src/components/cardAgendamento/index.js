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
                {/* <span aria-hidden="true">&times;</span> */}
                <br/>
                <span> {props.material} : {props.quantidade} </span><br/>
                <span > {props.nomeDoador} </span><br/>
                <span > {props.nomeCatador} </span><br/>
                {/* <a className="a-perfil" href={props.linkPerfil} rel="noreferrer noopener" target="_blank"><span title="Ver Perfil"> {props.categoria} : {props.nome} </span></a><br/> */}
                <span> Ponto de Encontro : {props.pontoEncontro} </span><br/>
               
                <div className={status}>
                    <span > {props.status} </span>
                </div>
                
                { props.status === 'DISPONÍVEL' ? (
                    <div>
                        <button className="btn btn-success">RESERVAR</button>
                    </div>
                ): ''}

            </div>
        </>
    );
}
export default CardAgendamento;