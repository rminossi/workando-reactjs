import React, {Component} from 'react';
import './Header.css'

class Header extends Component {

    render(){

        return(
        <div>
          <nav className="navbar navbar-expand-md pl-4">
            <a href="#" className="brand">Workando</a>
            <div className="collapse navbar-collapse">
            <i className="fas fa-search"></i><input className='pesquisa' type='text' placeholder='Pesquisar...'></input>
            <div className='saudacao ml-auto'>Olá, <span>Carla</span>
              <img className='img-perfil' src={require ('../../../public/imgs/carla.jpg')} alt=""/>
              <button><i className="fas fa-bell"></i></button>
              <button><i className="fas fa-bars pl-2"></i></button>
            </div>
            </div>
            <div className="d-md-none navbar-mobile">
              <button><i className="fas fa-search navbar-toggler" data-togle="collapse" data-target="search"></i></button>
              <button><i className="fas fa-bell"></i></button>
              <button><i className="fas fa-bars navbar-toggler" data-togle="collapse" data-target="menu"></i></button>
            </div>
          </nav>
        </div>        
        );
    }
}

export default Header;