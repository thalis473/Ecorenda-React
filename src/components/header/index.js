import './header.css'

export function Header(props) {
    return(
        <header>
            
                {props.children}
            
        </header>
    )
}

// exemplo de multiplos compenentes em um arquivo

export function HeaderUser() {
    return(
        <>
        </>
    )
}