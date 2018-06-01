import React, {Component} from 'react';
import logo from './logo.svg';
import X from './X.png'
import O from './O.png'
import './App.css';
import Game from "./Game";

const size =  5;
const symbols = [' ',
    <img alt={'X'} style={{maxWidth: '80%', height: 'auto',}} src={X}/>,
    <img alt={'O'} style={{maxWidth: '80%', height: 'auto',}} src={O}/>];

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Game symbols={symbols} size={size}/>
            </div>
        );
    }
}


