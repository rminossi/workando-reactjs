import React, {Component} from 'react';
import './Chamada.css'

class Chamada extends Component{
  render(){
    return(
      <div className="row chamada-app">
        <div className='col-8 chamada-app-texto pl-0 pl-md-5 pt-lg-5 pt-5 mb-3'>
            <p className='chamada pl-4 mb-3'>Baixe o aplicativo para dispositivos móveis</p>
        </div>
        <div className='col-3 px-0 pt-lg-5 pt-3 ml-0 ml-md-auto chamada-app-botoes'>
            <button><i class="fab fa-android"></i></button>
            <button><i class="fab fa-apple"></i></button>
        </div>
      </div>  
      )
  }
}

export default Chamada