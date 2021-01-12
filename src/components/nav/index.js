import { Link } from 'react-router-dom'

import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu'

import './navbar.css'

export default function Navbar() {
    return (
        <nav>
            
            <Link to="/home"><HomeIcon /><br/>Inicio</Link>
            <Link to="/buscar"><SearchIcon /><br/>Buscar</Link>
            <Link to=""><AccountCircleIcon /><br/>Login</Link>
            <Link to=""><MenuIcon /><br/>Menu</Link>
        </nav>
    )
}
