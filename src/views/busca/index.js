
import FormBuscar from '../../components/form/busca'
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

          
            <div>
            <FormBuscar />
       
        


       

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