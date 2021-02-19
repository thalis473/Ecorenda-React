import React from 'react';
import CardDashboard, { CardFeedback } from '../../components/cardDashboard';
import GraficoMaterial, { GraficoUsuarios } from '../../components/graficoDashBoard';
import PrintIcon from '@material-ui/icons/Print';
import './dashboard.css';
import materiais from '../userHome/materiais.json';
import usuarios from './usuario.json';

import axios from "axios"

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Impressao } from '../../components/pdfmake/impressao';
import print from '../../components/pdfmake/impressao.json';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function Adm(){
    const header = [
        { text: 'Nome', bold: true, fontSize: 9, margin: [0, 4, 0, 0] },
        { text: 'Categoria', bold: true, fontSize: 9, margin: [0, 4, 0, 0] },
        { text: 'Data Cadastro', bold: true, fontSize: 9, margin: [0, 4, 0, 0] },
      ];

      const body = print.map((d) => {
          return [
            { text: d.nome, fontSize: 8 },
            { text: d.categoria, fontSize: 8 },
            { text: d.datacadastro, fontSize: 8 },
          ];
        });

    var conf = { titulo:'RELÁTORIO USUÁRIO CADASTRADOS', footer:'© EcoRenda 2021'}

  
      const visualizarImpressao = async () => {
          const classeImpressao = new Impressao(conf,header,body);//titulo,header,dadosParaImpressao, body, footer
        //   const classeImpressao = new Impressao('RELÁTORIO USUÁRIO CADASTRADOS',header,body,'© EcoRenda 2021');//titulo,header,dadosParaImpressao, body, footer
          const documento = await classeImpressao.PreparaDocumento();
          pdfMake.createPdf(documento).open({}, window.open('', '_blank'));
      }
  
    const handleSubmitPrint = (event) => {
        axios.get(`http://localhost:4000/user`);
    }

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
                <button onClick={() => window.print()} className="btn-print" title="Imprima a relação "><PrintIcon/></button>
                <hr/>
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