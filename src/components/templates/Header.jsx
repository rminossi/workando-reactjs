import React, {Component} from 'react';
import './Header.css'

class Header extends Component {

    render(){

        return(
        <div>
          <nav className="navbar navbar-expand-lg">
            <div className="col-2"><h3 className="brand">Workando</h3></div>
            <div className="col-6"><i className="fas fa-search"></i><input className='pesquisa' type='text' placeholder='Pesquisar...'></input></div>
            <div className="col-4"><p className='saudacao'>Olá, <span>Carla</span><img className='img-perfil' src={require ('../../../public/imgs/carla.jpg')} alt=""/> <i className="fas fa-bell"></i><i className="fas fa-bars"></i></p></div>
          </nav>
        </div>        
        );
    }
}

export default Header;