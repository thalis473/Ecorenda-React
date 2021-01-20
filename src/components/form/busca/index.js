import './busca.css'

export default function FormBuscar(props) {
    return(
        <div className='container'>
            <h2>Buscar</h2>
            <form className="container">
               
                <div className="input-group mb-3">
                    <input type="text" className="form-control mb-3" id="nome" placeholder="Buscar por nome" aria-label="Recipient's username" />
                 
                        <div className="input-group mb-3">
                            <select className="custom-select" id="material">
                                <option selected>Escolher...</option>
                                <option value="1">Um</option>
                                <option value="2">Dois</option>
                                <option value="3">Três</option>
                            </select>
                        <div className="input-group-append">
                            <label className="input-group-text bg-secondary text-light" >Material</label>
                        </div>
                        </div>
                        

                        <div className="input-group mb-3">
                            <select className="custom-select" id="regiao">
                                <option selected>Escolher...</option>
                                <option value="1">Rua dos Bobos</option>
                                <option value="2">bla bla bla</option>
                                <option value="3">arerebaba</option>
                            </select>
                        <div className="input-group-append">
                            <label className="input-group-text bg-secondary text-light " >Região</label>
                        </div>
                        </div>

                        <div className="input-group mb-3">
                            <select className="custom-select" id="categoria">
                                <option selected>Escolher...</option>
                                <option value="1">Estabelecimento</option>
                                <option value="2">Coletor</option>
                                <option value="3">colaborador</option>
                            </select>

                        <div className="input-group-append">
                            <label className="input-group-text bg-secondary text-light" >categoria</label>
                        </div>
                        </div>
                        <div className="input-group-append">
                        <button className="form-button" type="submit" id="buscar">Buscar</button>

                    </div>
                </div>
            </form>
        </div>
    )
}