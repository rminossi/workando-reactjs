import React, {Component} from 'react';
import './Chamada.css'

class Chamada extends Component{
  render(){
    return(
      <div className="row chamada-app">
        <div className='col-8 chamada-app-texto'>
            <p className='chamada'>Baixe o aplicativo para dispositivos móveis</p>
        </div>
        <div className='col-4 chamada-app-botoes'>
            <button><i class="fab fa-android"></i></button>
            <button><i class="fab fa-apple"></i></button>
        </div>
      </div>  
      )
  }
}

export default Chamada