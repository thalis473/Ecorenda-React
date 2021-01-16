import './btncategoria.css';


export default function ButtonsCategoria(props) {
    return(
        <div >
           
            <button type="button" className="btn btn-outline-success  btn-block btnconfig"> 
             <i className="fa fa-cutlery icoconfig"></i>Metais
            </button>
            <button type="button" className="btn btn-outline-success  btn-block btnconfig"> 
             <i className='fas fa-couch icoconfig'></i> Moveis
            </button>
            <button type="button" className="btn btn-outline-success  btn-block btnconfig"> 
             <i className='fas fa-file-signature icoconfig'></i>Papelão
            </button>
            <button type="button" className="btn btn-outline-success  btn-block btnconfig"> 
             <i className='fas fa-glass-cheers icoconfig'></i>Vidros
             </button>
            <button type="button" className="btn btn-outline-success  btn-block btnconfig"> 
             <i className="material-icons icoconfig">local_drink</i>Óleo
            </button>
            <button type="button" className="btn btn-outline-success  btn-block btnconfig"> 
            <i className="fa fa-television icoconfig" aria-hidden="true"></i>Eletronicos
            </button>
            <button type="button" className="btn btn-outline-success  btn-block btnconfig"> 
            <i class="fas fa-cut icoconfig"></i> Alumínio
            </button>
           
            
            

            
           

            
            

            
        </div>
    )
}