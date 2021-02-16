// import {useSelector} from 'react-redux'

// import MaterialCard from '../../components/materialCard'
// import {PerfilBox} from '../../components/perfil-box'
// import FormBuscar from '../../components/form/busca'

import './userHome.css'
import GraficoMaterial from '../../components/graficoDashBoard'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

export default function UserHome() {
    // const contatos = useSelector(state => state.contatos.dados)

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

      const desempenho = [
        {
          "name": "agendamento no1",
          "uv": 8,
        },
        {
          "name": "agendamento no2",
          "uv": 5,
        },
        {
          "name": "Page C",
          "uv": 7,
        }
      ]
      
    
    return (
    <div className="container-fluid">

        <button onClick={() => window.print()}>PRINT</button>

        {/*} <div className="user-home">
              <MaterialCard rotulo="Recursos Disponíveis"/>
             <MaterialCard rotulo="Valores do dia"/> 
         <div id="container-favoritos">
                 <div id="container-filtro">
                      <FormBuscar /> 
                 </div>
                 <div id="container-lista">
                     {contatos.map(item => <PerfilBox key={item.nome} dados={item} />)}
                 </div> 
                     </div>*/}
                

            {/**DASHBOARD DO USUARIO */}
            <h2 className="titleDashboard">Olá, XXXXX. Bem vindo ao seu dashboard.</h2>

            <div >{/**terceira linha */}{/**gráficos */}
                <h3 className="titleDashboard">Média de Materiais Coletados</h3>
                <small className="subtitleDashboard">Nos últimos 30 dias</small>
                
                <GraficoMaterial data={materiais} legenda="Quantidade" cor="#2E8B57"/>
            </div>
        <div >{/**quarta linha */} {/**doador */}
            <h3 className="titleDashboard">Próximos agendamentos</h3>
       
            <div className="view-feedback">
                {/**AQUI ENTRA O MAP */}
                {/**card locais favoritos */}
                {/**FIM MAP */}
            </div>
        </div>
        <div >{/**quarta linha */} {/**doador */}
            <h3 className="titleDashboard">Desempenho desse mês</h3>
            <small className="subtitleDashboard">Baseado nos agendamentos confirmados dos últimos 30 dias</small>

       
             <LineChart width={730} height={250} data={desempenho}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </div>

        <div >{/**quarta linha */} {/**feedback */}
            <h3 className="titleDashboard">Locais Favoritos</h3>

            <div className="view-feedback">
                {/**AQUI ENTRA O MAP */}
                {/**card locais favoritos */}
                {/**FIM MAP */}
            </div>
            
        </div>
        <div >{/**quarta linha */} {/**feedback */}
            <h3 className="titleDashboard">Doadores Favoritos</h3>

            <div className="view-feedback">
                {/**AQUI ENTRA O MAP */}
                {/**card locais favoritos */}
                {/**FIM MAP */}
            </div>
        </div>
        </div>
    )
}