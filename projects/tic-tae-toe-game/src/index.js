import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    
    // Criamos o metódo Constructor, para inicializar o state do componente.

    render() {
      return (
        <button 
            className="square" 
            onClick={() => this.setState({value: 'X'})}
        >
        {/* Passamos um prop onClick para o button, que dispara uma função. */}
        {/* Agora, sempre que clicarmos, o botão ao ser clicado mudará o state de square, 
        trocando seu value para X  */}
        {/* this.props.value */}
            {this.state.value} 
            {/* Invés do props, agora mostramos dentre do botão o valor do state. */}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  