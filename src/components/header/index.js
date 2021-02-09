import './header.css'

export function Header(props) {
    return(
    <header>
        <img src={require(`../../img/icons/ecorenda.png`).default} alt="Ecorenda Logo" id="header-logo"/>
            {props.children}
    </header>
    )
}
