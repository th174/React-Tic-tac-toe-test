import React from 'react'
import Board from "./Board";
import JumpToTurn from "./JumpToTurn";
import Tile from "./Tile";

export default class Game extends React.PureComponent {
    constructor(props) {
        super(props);
        this.buildNextTurn = this.buildNextTurn.bind(this);
        this.clickedOn = this.clickedOn.bind(this);
        this.markCell = this.markCell.bind(this);
        this.updateWinValues = this.updateWinValues.bind(this);
        this.checkWin = this.checkWin.bind(this);
        this.jumpToTurn = this.jumpToTurn.bind(this);
        this.history = [];
        this.turnNumber = 0;
        this.state = {
            tiles: Array(this.props.size).fill(Array(this.props.size).fill(0)),
        };
        this.history[0] = {
            state: this.state,
            winValues: Array(this.props.symbols.length).fill({
                diags: {},
                rows: {},
                cols: {}
            })
        };
    }

    clickedOn(row, col) {
        if (this.history[this.turnNumber].state.tiles[row][col] !== 0 || this.winner) {
            return;
        }
        this.buildNextTurn();
        this.markCell(row, col);
        this.updateWinValues(row, col);
        this.checkWin(row, col);
        this.setState(() => this.history[++this.turnNumber].state);
    }

    markCell(row, col) {
        this.history[this.turnNumber + 1].state.tiles[row][col] = this.turnNumber % (this.props.symbols.length - 1) + 1;
    }

    updateWinValues(row, col) {
        const nextTurn = this.history[this.turnNumber + 1];
        const oldWinValues = this.history[this.turnNumber].winValues[nextTurn.state.tiles[row][col]];
        const newWinValues = nextTurn.winValues[nextTurn.state.tiles[row][col]];
        newWinValues.rows[row] = (oldWinValues.rows[row] || 0) + 1;
        newWinValues.cols[col] = (oldWinValues.cols[col] || 0) + 1;
        if (row === col) {
            newWinValues.diags['\\'] = (oldWinValues.diags['\\'] || 0) + 1;
        }
        if (row + col === this.props.size - 1) {
            newWinValues.diags['/'] = (oldWinValues.diags['/'] || 0) + 1;
        }
    }

    checkWin(row, col) {
        const currentTurn = this.history[this.turnNumber + 1];
        const playerWinValues = currentTurn.winValues[currentTurn.state.tiles[row][col]];
        if (Math.max(playerWinValues.rows[row], playerWinValues.cols[col], playerWinValues.diags['\\'] || 0, playerWinValues.diags['/'] || 0) >= this.props.size) {
            this.winner = this.props.symbols[currentTurn.state.tiles[row][col]];
        }
    }

    buildNextTurn() {
        const tiles = [];
        const currentTurn = this.history[this.turnNumber];
        for (let row = 0; row < this.props.size; row++) {
            tiles[row] = [];
            for (let col = 0; col < this.props.size; col++) {
                tiles[row][col] = currentTurn.state.tiles[row][col];
            }
        }
        const winValues = [];
        for (let i = 0; i < this.props.symbols.length; i++) {
            winValues[i] = {
                diags: Object.assign({}, currentTurn.winValues[i].diags),
                rows: Object.assign({}, currentTurn.winValues[i].rows),
                cols: Object.assign({}, currentTurn.winValues[i].cols)
            }
        }
        this.history[this.turnNumber + 1] = {
            state: {
                tiles: tiles
            },
            winValues: winValues,
        };
    }

    jumpToTurn(turnNumber) {
        this.turnNumber = parseInt(turnNumber, 10);
        this.history = this.history.slice(0, this.turnNumber + 1);
        this.winner = undefined;
        this.setState(() => this.history[this.turnNumber].state)
    }

    render() {
        return (
            <div>
                <Board symbols={this.props.symbols} tiles={this.state.tiles} onClick={this.clickedOn}/>
                <JumpToTurn turnNumber={this.turnNumber} onSubmit={this.jumpToTurn}/>
                {this.winner &&
                <p>GGWP Winner:<Tile row={-1} col={-1} symbol={this.winner} onClick={() => Function.prototype}/></p>}
            </div>
        );
    }
}
