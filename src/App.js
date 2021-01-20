import { Switch, Route } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Body from './components/body'
import Navbar from './components/nav'
import {Header} from './components/header'
import ViewError from './views/error'
import ViewHome from './views/home'
import ViewBusca from './views/busca'
import ViewEntrar from './views/entrar'
import UserHome from './views/userHome'
import UserPerf from './views/userPerf'

import {getApi} from './dados/fetch'

export default function App() {
  const [lista, setLista] = useState([])
  useEffect(async ()=> {
    let dados = await getApi()
    setLista(dados)
  }, [])


  return (
    <div className="App">
        <Header>
          <Navbar />
        </Header>
      <Body>
        <Switch>
          <Route path="/" component={ViewHome} exact/>
          <Route path="/buscar" component={ViewBusca} exact />
          <Route path="/entrar" component={ViewEntrar} exact />
          <Route path="/error" component={ViewError} />
          <Route path={`/user`} component={UserHome} exact />
          <Route path="/perfil" component={UserPerf} exact />
        </Switch>
      </Body>
    </div>
  );
}


