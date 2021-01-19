
import {PerfilBox} from '../../components/perfil-box'
import './busca.css'

const itemLista = {
    perfilType : "coletor",
    name: "José",
    location : "Rua xyz, 999",
    resources : ["plastico", "vidro", "papel", "aluminio"]
}

export default function ViewBusca() {
    return (

        <div>

        <div id="group-list-busca">
            <h1>Página de buscas</h1>
            <section id="filtro">
                <input type="text" placeholder="Buscar por nome" />
                <button>BUSCAR</button><br/>
            <label for="filtrar-tipo">Tipo </label>
                <select id="filtrar-tipo">
                    <option value="" selected>selecione</option>
                    <option value="Coletor">Coletor</option>
                    <option value="Ponto de coleta">Ponto de coleta</option>
                    <option value="Comprador">Comprador</option>
                </select>
            <label for="filtrar-local">Região </label>
                <select id="filtrar-local">
                    <option value="" selected>selecione</option>
                    <option value="Coletor">Pavuna</option>
                    <option value="Ponto de coleta">Miguel Couto</option>
                    <option value="Comprador">Boa esperança</option>
                </select>
            </section>

            <PerfilBox dados={itemLista} />
            <PerfilBox dados={itemLista} />
            <PerfilBox dados={itemLista} />
            <PerfilBox dados={itemLista} />
            <PerfilBox dados={itemLista} />
            <PerfilBox dados={itemLista} />
            <PerfilBox dados={itemLista} />

            
        </div>
        </div>
    )
}