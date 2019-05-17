import React, {Component} from 'react';
import './Chamada.css'

class Chamada extends Component{
  render(){
    return(
      <div className="row chamada-app">
        <div className='col-8 chamada-app-texto pl-0 pt-lg-5 pt-4'>
            <p className='chamada'>Baixe o aplicativo para dispositivos móveis</p>
        </div>
        <div className='col-3 px-0 pt-lg-5 pt-3 ml-auto chamada-app-botoes'>
            <button><i class="fab fa-android"></i></button>
            <button><i class="fab fa-apple"></i></button>
        </div>
      </div>  
      )
  }
}

export default Chamada