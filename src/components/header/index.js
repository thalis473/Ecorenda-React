import { requirePropFactory } from '@material-ui/core'
import './header.css'

export function Header(props) {
    return(
        <header>
            <img src={require(`../../img/icons/ecorenda.png`).default} id="header-logo"/>
                {props.children}
            
        </header>
    )
}
