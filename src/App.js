import { Switch, Route } from 'react-router-dom'
import Body from './components/body'
import {Header, HeaderUser} from './components/header'
import ViewError from './views/error'
import ViewHome from './views/home'


export default function App() {
  return (
    <div className="App">
      <Body>
        <Header />
        <Switch>
          <Route path="/home" component={ViewHome} exact/>
          <Route path="/" component={ViewError} />
        </Switch>
      </Body>
    </div>
  );
}


