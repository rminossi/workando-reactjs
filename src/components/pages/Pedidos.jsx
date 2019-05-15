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
        <div className='row header-projeto'>
          <div className="col-1">
            <img className='img-projeto' src={require('../../../public/imgs/'+this.props.img+'.png')} alt=""/>
          </div>
          <div className="col-3 descricao">
            <h4>{this.props.titulo}</h4>
            <p>Publicado há {this.props.tempo}</p>
            <p className='status-projeto'><span>Status</span>{this.props.status}</p>
          </div>
          <div className="col-2 acoes-projeto">
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
          <div className="col-3 card proposta">
            <img className='img-candidato' src={require('../../../public/imgs/wagner.jpg')} alt=""/>
            <h3 className="nome-candidato">Wagner Mens</h3>
            <p className="cargo-candidato"><span>Designer Gráfico</span></p>
            <p className="telefone-candidato">54 99988 0755</p>
            <p className="email-candidato">vagner.mens@gmail.com</p>
            <p className="endereco-candidato">Rua Fernando Sossa, 35</p>
            <p className="endereco2-candidato">Caxias do Sul | RS</p>
            <div className="row acoes-proposta">
              <button className="btn-ver-mais">Ver mais</button>
              <button className="btn-contratar">Contratar</button>
            </div>
          </div>
          <div className="col-3 card proposta">
          <img className='img-candidato' src={require('../../../public/imgs/ricardo.jpg')} alt=""/>
            <h3 className="nome-candidato">Ricardo Lima</h3>
            <p className="cargo-candidato"><span>Designer Gráfico</span></p>
            <p className="telefone-candidato">54 99988 0755</p>
            <p className="email-candidato">vagner.mens@gmail.com</p>
            <p className="endereco-candidato">Rua Fernando Sossa, 35</p>
            <p className="endereco2-candidato">Caxias do Sul | RS</p>
            <div className="row acoes-proposta">
              <button className="btn-ver-mais">Ver mais</button>
              <button className="btn-contratar">Contratar</button>
            </div>
          </div>
          <div className="col-3 card proposta">
          <img className='img-candidato' src={require('../../../public/imgs/beatriz.jpg')} alt=""/>
            <h3 className="nome-candidato">Beatriz Rosa</h3>
            <p className="cargo-candidato"><span>Designer Gráfico</span></p>
            <p className="telefone-candidato">54 99988 0755</p>
            <p className="email-candidato">vagner.mens@gmail.com</p>
            <p className="endereco-candidato">Rua Fernando Sossa, 35</p>
            <p className="endereco2-candidato">Caxias do Sul | RS</p>
            <div className="row acoes-proposta">
              <button className="btn-ver-mais">Ver mais</button>
              <button className="btn-contratar">Contratar</button>
            </div>
          </div>
        </div>
    )
  }
}

class Pedidos extends Component {

    render(){

        return(
        <div className="meus-pedidos">
          <p className='rota'>meus pedidos</p>
          <h3 className='titulo'>Meus pedidos</h3>
          <p className='subtitulo'>Peça orçamentos grátis, e contrate melhor.</p>
          <div className="row filtro">
            <div className="col-4 div-select">
            <select className="form-control">
              <option>Categoria</option>
              <option>Desenvolvimento Web</option>
              <option>Desenvolvimento Mobile</option>
              <option>Análise de Sistemas</option>
              <option>Engenharia de Software</option>
            </select>
            </div>
            <div className="col-4 div-select">
            <select className="form-control">
              <option>Status</option>
              <option>Em análise</option>
              <option>Pendente aceite</option>
              <option>Em desenvolvimento</option>
              <option>Encerrado</option>
            </select>
            </div>
            <div className="col-4 div-pesquisa">
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