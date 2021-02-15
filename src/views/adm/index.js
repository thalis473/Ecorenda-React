import React from 'react';
import CardDashboard, { CardFeedback } from '../../components/cardDashboard';
import GraficoMaterial, { GraficoUsuarios } from '../../components/graficoDashBoard';
import './dashboard.css';

export default function Adm(){
    const usuarios = [
        {
          "name": "Doador",
          "Quantidade": 31.47,
          "fill": "#3CB371"
        },
        {
          "name": "Catador",
          "Quantidade": 26.69,
          "fill": "#90EE90"
        },
        {
          "name": "Empresas",
          "Quantidade": 15.69,
          "fill": "#00FF7F"
        },
       
      ]
      const materiais = [
        {
          "name": "Papel/Papelão",
          "Quantidade": 10,
          "fill": "#0000FF"
        },
        {
          "name": "Metal/Alumínio",
          "Quantidade": 30,
          "fill": "#FFFF00"
        },
        {
          "name": "Vidro",
          "Quantidade": 8,
          "fill": "#008000"
        },
        {
          "name": "Plástico",
          "Quantidade": 19,
          "fill": "#FF0000"
        },
        {
            "name": "Eletrônico",
            "Quantidade": 21,
            "fill": "#00FF7F"
          }
       
      ]
    
    return(
        <div className="container-fluid ">
            <h2 className="titleDashboard">DashBoard ADM</h2>
           
            <div className="view-adm-cards">{/* primeira linha*/}
                <CardDashboard title="Doadores" quantidade="10"/>
                <CardDashboard title="Catadores" quantidade="50"/>
                <CardDashboard title="Empresas" quantidade="60"/>
            </div>

            <div>{/**segunda linha */}{/**gráficos */}
                <h3 className="titleDashboard">Média de Usuários</h3>
                <small className="subtitleDashboard">Nos últimos 30 dias</small>
                
                <GraficoUsuarios data={usuarios} legenda='Quantidade'/>
            </div>

        <div >{/**terceira linha */}{/**gráficos */}
            <h3 className="titleDashboard">Média de Materiais Reciclados</h3>
            <small className="subtitleDashboard">Nos últimos 30 dias</small>
            
            <GraficoMaterial data={materiais} legenda="Quantidade" cor="#2E8B57"/>
        </div>

        <div >{/**quarta linha */} {/**feedback */}
            <h3 className="titleDashboard">Feedbacks</h3>
            <small className="subtitleDashboard">Nos últimos 30 dias</small>

            <div className="view-feedback">
                {/**AQUI ENTRA O MAP */}
                <CardFeedback 
                    title="José" 
                    subtitle="Consegui aumentar 20% da minha renda pelo EcoRenda!" 
                    categoria="Catador" 
                    datacadastro="02/02/2021 às 12:45 PM" />
                {/**FIM MAP */}
            </div>
        </div>
    </div>
    );
}