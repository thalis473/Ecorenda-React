

export default function Autorizacao(props) {
    return(
    <div>
        <div className="form-check">
                <label className="form-check-label">
                <input className="form-check-input" type="checkbox" data-toggle="modal"  data-target="#ModalLongoExemplo" /> Aceito os termos 
                </label>
        </div>

        <div className="modal fade" id="ModalLongoExemplo" tabindex="-1"role="dialog" aria-labelledby="TituloModalLongoExemplo" aria-hidden="true">

            <div className="modal-dialog" role="document">

                <div className="modal-content">
                         <div className="modal-header">
                            <h5 className="modal-title" id="TituloModalLongoExemplo">Termo de Compromisso</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                            </button>
                          </div>

                    <div className="modal-body">
                        autorizo....bla bla bla...
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Aceito</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
}



