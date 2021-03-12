import { Switch, Route } from 'react-router-dom'
import {useSelector} from 'react-redux'

import Body from './components/body'
import {Navbar, NavbarUser} from './components/nav'
import {Header} from './components/header'
import ViewError from './views/error'
import ViewHome from './views/home'
import ViewBusca from './views/busca'
import ViewEntrar from './views/entrar'
import ViewMenu from './views/menu'
import UserHome from './views/userHome'
import UserPerf from './views/userPerf'
import Adm from './views/adm'
import Agendamento from './views/agendamento'
import AtualizarPerfil from './views/userPerf/alterarperfil'
import ViewContato from './views/contato'


export default function App() {
  const user = useSelector(state => state.user.dados)


  return (
    <div className="App">
        <Header>
          {user.nonUser ? <Navbar /> : <NavbarUser />}
        </Header>
      <Body>
        <Switch>
          <Route path="/" component={ViewHome} exact/>
          <Route path="/buscar" component={ViewBusca} exact />
          <Route path="/agendamento" component={Agendamento} exact />
          <Route path="/entrar" component={ViewEntrar} exact />
          <Route path="/error" component={ViewError} />
          <Route path={`/user`} component={UserHome} exact />
          <Route path="/perfil" component={UserPerf} exact />
          <Route path="/atualizar" component={AtualizarPerfil} exact />
          <Route path='/menu' component={ViewMenu} />
          <Route path='/contato' component={ViewContato} />
          <Route path='/adm' component={Adm} />
        </Switch>
      </Body>
    </div>
  );
}


