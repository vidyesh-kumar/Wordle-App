import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/Wordle';
import upper from './Components/Data';

const answer = upper[Math.floor(Math.random()*upper.length)]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App Answer={answer}/>
);

