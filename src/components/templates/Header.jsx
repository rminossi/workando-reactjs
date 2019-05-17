import React, {Component} from 'react';
import './Header.css'

class Header extends Component {

    render(){

        return(
        <div>
          <nav className="navbar navbar-expand-md">
            <a className="brand">Workando</a>
            <div className="collapse navbar-collapse">
            <i className="fas fa-search"></i><input className='pesquisa' type='text' placeholder='Pesquisar...'></input>
            <div className='saudacao ml-auto'>Olá, <span>Carla</span>
              <img className='img-perfil' src={require ('../../../public/imgs/carla.jpg')} alt=""/>
              <a href="#"><i className="fas fa-bell"></i></a>
              <a href="#"><i className="fas fa-bars"></i></a>
            </div>
            </div>
            <div className="d-md-none navbar-mobile">
              <a href="#"><i className="fas fa-search"></i></a>
              <a href="#"><i className="fas fa-bell"></i></a>
              <a href="#"><i className="fas fa-bars"></i></a>
            </div>
          </nav>
        </div>        
        );
    }
}

export default Header;