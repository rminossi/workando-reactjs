import React, {Component} from 'react';
import './Footer.css'

class Footer extends Component{
  render(){
    return(
        <div>
            <footer>
              <div className="row">
                <div className="col-3">
                  <h4 className="brand" >Workando</h4>
                </div>
                <div className="col-3">
                  <h6>Empresa</h6>
                  <ul>
                    <li>Sobre</li>
                    <li>Como Funciona</li>
                    <li>Categorias</li>
                  </ul>
                </div>
                <div className="col-3">
                  <h6>Contato</h6>
                  <ul>
                    <li>Ajuda</li>
                    <li>Contatos</li>
                    <li>Aplicativo Móvel</li>
                  </ul>
                </div>
                <div className="col-3">
                  <div className="row redes">
                    <button><i class="fab fa-facebook-f"></i></button>
                    <button><i class="fab fa-instagram"></i></button>
                    <button><i class="fab fa-google-plus-g"></i></button>
                  </div>
                </div>
                </div>
            </footer>
        </div>
    )
  }
}

export default Footer;