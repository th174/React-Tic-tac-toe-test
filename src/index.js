import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// export const ExternalTicTacToe = zoid.create({
//
//     tag: 'my-login-component',
//
//     url: 'http://localhost:8000/',
//
//     props: {
//         gridSize:{
//             type: 'number',
//             required: false,
//             def: () => {
//                 return '3'
//             }
//         },
//
//         symbols: {
//             type: 'object',
//             required: false,
//             def: () => {
//                 return [' ',
//                     <img alt={'X'} style={{maxWidth: '80%', height: 'auto',}} src={X}/>,
//                     <img alt={'O'} style={{maxWidth: '80%', height: 'auto',}} src={O}/>];
//             }
//         }
//     }
// });

ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker();
