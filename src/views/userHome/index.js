import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import axios from 'axios'
import {rotaPadrao} from '../../dados/fetch'

import './userHome.css'
import GraficoMaterial from '../../components/graficoDashBoard'
import {GraficoDesempenho} from '../../components/graficoDashBoard'
import CardAgendamento from '../../components/cardAgendamento'
import PrintIcon from '@material-ui/icons/Print';
import MaterialCard from '../../components/materialCard'
import FormCadMateriais from '../../components/form/cadMaterial'

import data from '../agendamento/agendamento.json';
import desempenho from './desempenho.json';


import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Impressao } from '../../components/pdfmake/impressao';
import print from '../../components/pdfmake/impressao.json';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function UserHome() {
    const user = useSelector(state => state.user.dados[0])
    const dispatch = useDispatch()

    useEffect(()=> {
        axios.get(`${rotaPadrao}/usersatt/email=${user.email}/senha=${user.senha}`)
        .then(response => dispatch({type: 'ATT', payload: response.data}))
        axios.get(`${rotaPadrao}/materiais/busca/id=${user.id}`)
        .then(response => dispatch({type: "CARREGAR_MATERIAL", payload: response.data}))
    },[])

    useEffect(()=> {
        axios.get(`${rotaPadrao}/usersatt/email=${user.email}/senha=${user.senha}`)
        .then(response => dispatch({type: 'ATT', payload: response.data}))
    },[])

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
          const classeImpressao = new Impressao(conf,header,body);
          const documento = await classeImpressao.PreparaDocumento();
          pdfMake.createPdf(documento).open({}, window.open('', '_blank'));
      }
  
    return (
        <>
            <div className='view-header-userHome'>
                <h1 className="titleDashboard">Olá, { user.nome === null ? 'Visitante' : user.nome }. Bem vindo ao seu painel</h1>
                <button onClick={visualizarImpressao} className="btn-print" title="Imprima a relação "><PrintIcon/></button>
            </div>
    <div className="container-fluid container-dashboard">


        <div className="container-aside">
        <div >{/**segunda linha */}
                <h3 className="titleDashboard">Próximos agendamentos</h3>
                <hr/>
                <div className="view-userHome container-agendamentos">
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
        </div>


        <div className="container-aside">

                { user.atribuicao != "catador" ? <FormCadMateriais /> : null}
                {user.atribuicao != "catador" ? <MaterialCard /> : null} 
            
            <div >{/**primeira linha */}{/**gráficos */}
                <h3 className="titleDashboard">Média de Materiais Coletados</h3>
                <hr/>
                <small className="subtitleDashboard">Nos últimos 30 dias</small>
                
                <GraficoMaterial data={user.materiais} legenda="peso" cor="#2E8B57"/>
                {/* <GraficoMaterial data={materiais} legenda="Quantidade" cor="#2E8B57"/> */}
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
        </div>
        </>
    )
}