import React from 'react';
import './cardDashboard.css'

export default function CardDashboard(props){
    return(
            <div className="card-body cardPrincipal">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text ">{props.quantidade} Cadastrados</p>
            </div>
        );
}

export function CardFeedback(props){
    return(
        <div className="card-body cardPrincipal">
            <h6 className="card-title">{props.title}</h6>
            <p className="card-text ">{props.subtitle}</p>
            <span className="cardFooter">{props.categoria} |{props.datacadastro}</span>
        </div>
    );
}
