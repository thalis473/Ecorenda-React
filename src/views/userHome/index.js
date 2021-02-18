import './userHome.css'
import GraficoMaterial from '../../components/graficoDashBoard'
import {GraficoDesempenho} from '../../components/graficoDashBoard'
import CardAgendamento from '../../components/cardAgendamento'
import PrintIcon from '@material-ui/icons/Print';

import data from '../agendamento/agendamento.json';
import materiais from './materiais.json';
import desempenho from './desempenho.json';


import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Impressao } from '../../components/pdfmake/impressao';
import print from '../../components/pdfmake/impressao.json';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function UserHome() {
    const header = [
        { text: 'Nome', bold: true, fontSize: 9, margin: [0, 4, 0, 0] },
        { text: 'Bairro', bold: true, fontSize: 9, margin: [0, 4, 0, 0] },
        { text: 'Contato', bold: true, fontSize: 9, margin: [0, 4, 0, 0] },
      ];

      const body = print.map((d) => {
          return [
            { text: d.nome, fontSize: 8 },
            { text: d.qtdEstoque, fontSize: 8 },
            { text: d.qtdVendido, fontSize: 8 },
          ];
        });

    var conf = { titulo:'RELÁTORIO USUÁRIO CADASTRADOS', footer:'© EcoRenda 2021'}

  
      const visualizarImpressao = async () => {
          const classeImpressao = new Impressao(conf,header,body);//titulo,header,dadosParaImpressao, body, footer
        //   const classeImpressao = new Impressao('RELÁTORIO USUÁRIO CADASTRADOS',header,body,'© EcoRenda 2021');//titulo,header,dadosParaImpressao, body, footer
          const documento = await classeImpressao.PreparaDocumento();
          pdfMake.createPdf(documento).open({}, window.open('', '_blank'));
      }
  
    return (
    <div className="container-fluid">

            <div className='view-header-userHome'>
                <h1 className="titleDashboard">Olá, Rayssa. Bem vindo ao seu painel</h1>
                <button onClick={visualizarImpressao} className="btn-print" title="Imprima a relação "><PrintIcon/></button>
                {/* <button onClick={() => window.print()} className="btn-print" title="Imprima a relação "><PrintIcon/></button> */}
            </div>

            <div >{/**primeira linha */}{/**gráficos */}
                <h3 className="titleDashboard">Média de Materiais Coletados</h3>
                <hr/>
                <small className="subtitleDashboard">Nos últimos 30 dias</small>
                
                <GraficoMaterial data={materiais} legenda="Quantidade" cor="#2E8B57"/>
            </div>

            <div >{/**segunda linha */}
                <h3 className="titleDashboard">Próximos agendamentos</h3>
                <hr/>
                <div className="view-userHome">
                    {
                        data.map((data,d) => 
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

            <div >{/**terceira linha */} 
                <h3 className="titleDashboard">Desempenho desse mês</h3>
                <small className="subtitleDashboard">Baseado nos agendamentos confirmados dos últimos 30 dias</small>

                <div className="view-userHome">
                    <GraficoDesempenho data={desempenho} cor="#82ca9d" legenda="Coletas" titulo="Mês"/>
                </div>
            </div>

            <div >{/**quarta linha */}
                <h3 className="titleDashboard">Locais Favoritos</h3>

                <div className="view-userHome">
                    {/**AQUI ENTRA O MAP */}
                    {/**card locais favoritos */}
                    {/**FIM MAP */}
                </div>
                
            </div>
            <div >{/**quarta linha */} 
                <h3 className="titleDashboard">Doadores Favoritos</h3>

                <div className="view-userHome">
                    {/**AQUI ENTRA O MAP */}
                    {/**card locais favoritos */}
                    {/**FIM MAP */}
                </div>
            </div>
        </div>
    )
}