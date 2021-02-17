import React from 'react';
import PrintIcon from '@material-ui/icons/Print';
import '../agendamento/agendamento.css';

export const CardAgendamento = (props) =>{
    return(
        <div className="card-agendamento card-border-aluminio"> 
                <span className="title"> {props.hora} - {props.data}</span><span>X</span><br/>
                <span> {props.material} : {props.quantidade} </span><br/>
                <a href={props.linkPerfil} rel="noreferrer noopener" target="_blank"><span title="Ver Perfil"> {props.categoria} : {props.nome} </span></a><br/>
                <span> Ponto de Encontro : {props.pontoEncontro} </span><br/>
                <span className="text-status status-confirmado"> {props.status} </span>
        </div>
    );
}

export default function Index(){
    return(
        <div style={{height:'100%'}}>
            <div>
                <h2 style={{color:'white',margin:'10px', textAlign:'center'}}> Agendamentos</h2>
                <button onClick={() => window.print()} className="btn-print" title="Imprima a relação "><PrintIcon/></button>
            </div>
            <div style={{display:'flex', flexWrap:'wrap', }}>
                <CardAgendamento 
                    hora='12:30 PM'    
                    data='19/02/2021'
                    material='Alumínio'
                    quantidade='5kg'
                    categoria='Doador'
                    nome='Rayssa'
                    linkPerfil='www.google.com'
                    pontoEncontro='Caracol'
                    status='CONFIRMADO'
                    />

                    <CardAgendamento 
                        hora='12:30 PM'    
                        data='19/02/2021'
                        material='Alumínio'
                        quantidade='5kg'
                        categoria='Doador'
                        nome='Thalis'
                        linkPerfil='www.google.com'
                        pontoEncontro='Caracol'
                        status='CONFIRMADO'
                    />
                    
                    <CardAgendamento 
                        hora='12:30 PM'    
                        data='19/02/2021'
                        material='Alumínio'
                        quantidade='5kg'
                        categoria='Estabelecimento'
                        nome='Lucas'
                        linkPerfil='www.google.com'
                        pontoEncontro='Caracol'
                        status='CONFIRMADO'
                    />
                    <CardAgendamento 
                        hora='12:30 PM'    
                        data='19/02/2021'
                        material='Alumínio'
                        quantidade='5kg'
                        categoria='Doador'
                        nome='Gustavo'
                        linkPerfil='www.google.com'
                        pontoEncontro='Caracol'
                        status='CONFIRMADO'
                    />
                    <CardAgendamento 
                        hora='12:30 PM'    
                        data='19/02/2021'
                        material='Alumínio'
                        quantidade='5kg'
                        categoria='Doador'
                        nome='Pedro'
                        linkPerfil='www.google.com'
                        pontoEncontro='Caracol'
                        status='CONFIRMADO'
                    />
 
 
 <CardAgendamento 
                    hora='12:30 PM'    
                    data='19/02/2021'
                    material='Alumínio'
                    quantidade='5kg'
                    categoria='Doador'
                    nome='Rayssa'
                    linkPerfil='www.google.com'
                    pontoEncontro='Caracol'
                    status='CONFIRMADO'
                    />

                    <CardAgendamento 
                        hora='12:30 PM'    
                        data='19/02/2021'
                        material='Alumínio'
                        quantidade='5kg'
                        categoria='Doador'
                        nome='Thalis'
                        linkPerfil='www.google.com'
                        pontoEncontro='Caracol'
                        status='CONFIRMADO'
                    />
                    
                    <CardAgendamento 
                        hora='12:30 PM'    
                        data='19/02/2021'
                        material='Alumínio'
                        quantidade='5kg'
                        categoria='Estabelecimento'
                        nome='Lucas'
                        linkPerfil='www.google.com'
                        pontoEncontro='Caracol'
                        status='CONFIRMADO'
                    />
                    <CardAgendamento 
                        hora='12:30 PM'    
                        data='19/02/2021'
                        material='Alumínio'
                        quantidade='5kg'
                        categoria='Doador'
                        nome='Gustavo'
                        linkPerfil='www.google.com'
                        pontoEncontro='Caracol'
                        status='CONFIRMADO'
                    />
                    <CardAgendamento 
                        hora='12:30 PM'    
                        data='19/02/2021'
                        material='Alumínio'
                        quantidade='5kg'
                        categoria='Doador'
                        nome='Pedro'
                        linkPerfil='www.google.com'
                        pontoEncontro='Caracol'
                        status='CONFIRMADO'
                    />
 
            </div>
        </div>

    );
}