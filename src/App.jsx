import React, { Component } from 'react';
import './App.css';
import Header from './components/templates/Header'
import Pedidos from './components/pages/Pedidos'
import Chamada from './components/templates/Chamada'
import Footer from './components/templates/Footer'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Pedidos />
        <Chamada />
        <Footer />
      </div>
    );
  }
}

export default App;
