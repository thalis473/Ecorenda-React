import './header.css'

export function Header(props) {
    return(
        <header>
            <img src="#" id="header-logo"/>
                {props.children}
            
        </header>
    )
}
