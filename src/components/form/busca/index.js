import './busca.css'

export default function FormBuscar(props) {
    return(
        <div className='container'>
            <h2>Buscar</h2>
            <form className="container"> 
                <div className="input-group mb-3">
                    <input type="text" className="form-control mb-3" id="nome" placeholder="Buscar por nome" aria-label="Recipient's username" />
                </div>
                <div className="input-group-append">
                    <button className="form-button" type="submit" id="buscar">Buscar</button>
                </div>
            </form>
        </div>
    )
}