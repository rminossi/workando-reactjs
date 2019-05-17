import React, {Component} from 'react';
import './Pedidos.css'

class Propostas extends Component{

  constructor( props ) {
    super(props)
    this.state = {show: true}

    this.exibePropostas = this.exibePropostas.bind(this)
  }

  exibePropostas = () => {
    const {show} = this.state;
    this.setState({show: !show})
  }

  render(){
    
    return(
      <div>
        <div className='row header-projeto mb-3'>
          <img className='img-projeto d-md-block d-none' src={require('../../../public/imgs/'+this.props.img+'.png')} alt=""/>
        <div className="col-12 text-center text-md-left mb-md-3 mb-0 pl-0 col-md-5 md-3 ml-0 ml-md-4 descricao">
            <h4>{this.props.titulo}</h4>
            <p className="d-md-block d-none">Publicado há {this.props.tempo}</p>
            <p className='status-projeto d-md-block d-none'><span>Status</span>{this.props.status}</p>
          </div>
          <div className="col-12 mt-0 mt-md-5 text-center col-md-3 acoes-projeto ml-0 ml-md-auto d-inline pl-0 ">
            <button onClick={this.exibePropostas}><i className="fa fa-eye"></i></button>
            <button><i class="far fa-window-close"></i></button>
            <button><i class="fas fa-edit"></i></button>
          </div>
        </div>
        {this.state.show && <Candidatos />}
      </div>
    )
  }
}

class Candidatos extends Component{
  render(){

    return(
      
      
      <div className='row propostas'>
        <div className="card-deck col-12 px-0 mx-0 my-3">
          <div className="card proposta justify-content-center align-items-center">
            <img className='img-candidato' src={require('../../../public/imgs/wagner.jpg')} alt=""/>
            <h3 className="nome-candidato">Wagner Mens</h3>
            <p className="cargo-candidato"><span>Designer Gráfico</span></p>
            <p className="telefone-candidato">54 99988 0755</p>
            <p className="email-candidato">vagner.mens@gmail.com</p>
            <p className="endereco-candidato">Rua Fernando Sossa, 35</p>
            <p className="endereco2-candidato">Caxias do Sul | RS</p>
            <div className="row acoes-proposta col-9">
              <button className="btn btn-ver-mais col-xs-12 col-lg-5 mr-1 ml-1 ml-lg-3 block mt-5 mb-lg-5">Ver mais</button>
              <button className="btn btn-contratar col-xs-12 col-lg-5 mr-1 ml-1 btn-block mt-3 mb-5 mt-lg-5">Contratar</button>
            </div>
          </div>
          <div className="card proposta justify-content-center align-items-center">
          <img className='img-candidato' src={require('../../../public/imgs/ricardo.jpg')} alt=""/>
            <h3 className="nome-candidato">Ricardo Lima</h3>
            <p className="cargo-candidato"><span>Designer Gráfico</span></p>
            <p className="telefone-candidato">54 99988 0755</p>
            <p className="email-candidato">vagner.mens@gmail.com</p>
            <p className="endereco-candidato">Rua Fernando Sossa, 35</p>
            <p className="endereco2-candidato">Caxias do Sul | RS</p>
            <div className="row acoes-proposta col-9">
              <button className="btn btn-ver-mais col-xs-12 col-lg-5 mr-1 ml-1 ml-lg-3 block mt-5 mb-lg-5">Ver mais</button>
              <button className="btn btn-contratar col-xs-12 col-lg-5 mr-1 ml-1 btn-block mt-3 mb-5 mt-lg-5">Contratar</button>
            </div>
          </div>
          <div className="card proposta justify-content-center align-items-center">
          <img className='img-candidato' src={require('../../../public/imgs/beatriz.jpg')} alt=""/>
            <h3 className="nome-candidato">Beatriz Rosa</h3>
            <p className="cargo-candidato"><span>Designer Gráfico</span></p>
            <p className="telefone-candidato">54 99988 0755</p>
            <p className="email-candidato">vagner.mens@gmail.com</p>
            <p className="endereco-candidato">Rua Fernando Sossa, 35</p>
            <p className="endereco2-candidato">Caxias do Sul | RS</p>
            <div className="row acoes-proposta col-9">
            <button className="btn btn-ver-mais col-xs-12 col-lg-5 mr-1 ml-1 ml-lg-3 block mt-5 mb-lg-5">Ver mais</button>
              <button className="btn btn-contratar col-xs-12 col-lg-5 mr-1 ml-1 btn-block mt-3 mb-5 mt-lg-5">Contratar</button>
            </div>
          </div>
        </div>
        </div>
      
      
    )
  }
}

class Pedidos extends Component {

    render(){

        return(
        <div className="meus-pedidos m-lg-5 pl-lg-4 mx-5 pl-0">
          <p className='rota pl-2 pt-2 pl-md-0'>Meus pedidos</p>
          <h3 className='titulo'>Meus pedidos</h3>
          <p className='subtitulo d-md-block'>Peça orçamentos grátis, e contrate melhor.</p>
          <div className="row filtro">
            <div className="col-md-4 col-12 div-select ml-5">
            <select className="form-control">
              <option>Categoria</option>
              <option>Desenvolvimento Web</option>
              <option>Desenvolvimento Mobile</option>
              <option>Análise de Sistemas</option>
              <option>Engenharia de Software</option>
            </select>
            </div>
            <div className="col-md-4 col-12 div-select ml-5">
            <select className="form-control">
              <option>Status</option>
              <option>Em análise</option>
              <option>Pendente aceite</option>
              <option>Em desenvolvimento</option>
              <option>Encerrado</option>
            </select>
            </div>
            <div className="col-4 div-pesquisa col-md-4 col-12 ml-5">
            <input className='form-control form-pesquisa' type='text' placeholder='Pesquisar...'></input>
            </div>
          </div>
          <Propostas status="Em análise" tempo="um mes" titulo="Criação de logos" img="logo"/>
          <Propostas status="Encerrado" tempo="dois meses" titulo="Nutricionista" img="nutricionista"/>
          <Propostas status="Encerrado" tempo="dois meses" titulo="Aulas de inglês" img="ingles"/>
        </div>        
        );
    }
}

export default Pedidos;