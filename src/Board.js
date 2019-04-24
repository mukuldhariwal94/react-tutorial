import React from 'react';
import Square from './Square';
import { calculateWinner } from './WinnerCalculaterHelper';
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            isXNext: true
        }
        this.onSquareClicked = this.onSquareClicked.bind(this);
    }

    onSquareClicked(i) {
        console.log('clicked');
        
        const newSquare = this.state.squares.slice();
        if (calculateWinner(newSquare) || newSquare[i]) {
            return;
          }
        newSquare[i] = this.state.isXNext ? 'X' : 'O';
        this.setState({ squares: newSquare, isXNext: !this.state.isXNext });
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.onSquareClicked(i)} />;
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
          alert('Winner=' + winner);
        } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

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
        )
    }
}
export default Board; 