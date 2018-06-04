import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Game from "./Game";
import * as zoid from "zoid";


export const ExternalTicTacToe = zoid.create({

    tag: 'tic-tac-toe',

    url: 'http://localhost:8000/',
});

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Game symbols={window.xprops.symbols} size={window.xprops.size}/>
                <button onClick={() => window.xprops.callBack()}>Test Callback</button>
            </div>
        );
    }
}


