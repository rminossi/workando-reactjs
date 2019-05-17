import React, {Component} from 'react';
import './Footer.css'

class Footer extends Component{
  render(){
    return(
        <div>
            <footer>
              <div className="row mx-0">
                <div className="col-lg-3 col-4 col-12 px-0 text-center">
                  <h4 className="brand px-0 pt-4 pt-lg-5 mt-lg-5 text-ippercase" >Workando</h4>
                </div>                                                                              
                <div className="col-lg-3 col-4 pl-0">
                  <h6 className="pt-3 pt-lg-5 mt-lg-5 pl-3">Empresa</h6>
                  <ul className="pl-3">
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Como funciona</a></li>
                    <li><a href="#">Categorias</a></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-3">
                  <h6 className="pt-3 pt-lg-5 mt-lg-5 pl-3">Contato</h6>
                  <ul className="pl-3">
                    <li><a href="#">Ajuda</a></li>
                    <li><a href="#">Contatos</a></li>
                    <li><a href="#">Aplicativo Móvel</a></li>
                  </ul>
                </div>
                <div className="col-3 pt-lg-5 mt-lg-4 ml-5 ml-lg-0 pl-3 pl-lg-0">
                  <div className="row-fluid redes pt-3">
                    <button className="btn"><i class="fab fa-facebook-f"></i></button>
                    <button className="btn"><i class="fab fa-instagram"></i></button>
                    <button className="btn"><i class="fab fa-google-plus-g"></i></button>
                  </div>
                </div>
                </div>
            </footer>
        </div>
    )
  }
}

export default Footer;