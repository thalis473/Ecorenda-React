import React from 'react';
import './cadastro.css'



export default function FormCadastro(props) {
    return(
        
        <div ClassName="container-fluid">
           <form>
               <div className="from-row">
                    <div className="form-group col-sm-6" >
                        <label for="inputNome"> Seu Nome</label>
                        <input type="text" className="form-control" id="inputNome" placeholder="Nome"/>
                    </div>
                    <div className="form-group col-sm-6" >
                        <label for="inpuSobrenome"> Sobrenome</label>
                        <input type="text" className="form-control" id="inputsobrenome" placeholder="sobrenome"/>
                    </div>
                </div>
                <div className="from-row">
                    <div className="form-group col-sm-12" >
                        <label for="inputEnd"> Seu Endereço</label>
                        <input type="text" className="form-control" id="inputEnd" placeholder="Endereço completo"/>
                    </div>
                <div/>
                <div className="from-row">
                    <div className="form-group col-sm-6" >
                        <label for="inputCidade"> Cidade</label>
                        <input type="text" className="form-control" id="inputCidade" placeholder="Cidade"/>
                    </div>
                    <div className="form-group col-sm-4" >
                        <label for="inputCidade"> Seu Estado</label>
                        <select id="inputEst" className="form-control">
                            <option selected>Escolha</option>
                            <option>...</option>
                            <option>...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-gruop col-sm-2">
                        <label for="inputCEP">Cep</label>
                        <input type="text" id="inputCEP" className="form-control"/>
                    </div>
                </div>
                <br/><br/>
                <div className="form-row container">
                    <div className="form-goup col-sm-12">
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" /> Aceito os termos 
                            </label>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-sm-12">
                                <button type="submit" className="btn btn-primary">ENVIAR</button>
                            </div>
                        </div>
                    </div>
                </div>

               </div>
           </form>
        </div>
    )
}