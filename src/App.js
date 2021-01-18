import { Switch, Route } from 'react-router-dom'
import Body from './components/body'
import Navbar from './components/nav'
import {Header} from './components/header'
import ViewError from './views/error'
import ViewHome from './views/home'
import ViewBusca from './views/busca'
import ViewEntrar from './views/entrar'



export default function App() {
  return (
    <div className="App">
        <Header>
          <Navbar />
        </Header>
      <Body>
        <Switch>
          <Route path="/home" component={ViewHome} exact/>
          <Route path="/buscar" component={ViewBusca} exact />
          <Route path="/entrar" component={ViewEntrar} exact />
          <Route path="/" component={ViewError} />
        </Switch>
      </Body>
    </div>
  );
}


