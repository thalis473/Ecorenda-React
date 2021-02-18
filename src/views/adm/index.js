import React from 'react';
import CardDashboard, { CardFeedback } from '../../components/cardDashboard';
import GraficoMaterial, { GraficoUsuarios } from '../../components/graficoDashBoard';
import PrintIcon from '@material-ui/icons/Print';
import './dashboard.css';
import materiais from '../userHome/materiais.json'
import usuarios from './usuario.json'

export default function Adm(){
    return(
        <div className="container-fluid ">
            <div className='view-header-adm'>
                <h2 className="titleDashboard">Painel de Controle Administrativo</h2>
                <button onClick={() => window.print()} className="btn-print" title="Imprima a relação "><PrintIcon/></button>
            </div>
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