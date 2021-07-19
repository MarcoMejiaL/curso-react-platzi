// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react'; 
import ReactDOM from 'react-dom';
import Badge from './components/Badge';
/* import Titulo from './templates/titulo'; */
const ejemplo = 'marco';
/* const element = <h1>Hello, Platzi Badges paquito cabeza!</h1>; */
/* const element = React.createElement('a',{href:'#'},'hola') */
/* const element = React.createElement('p',{},`hola soy ${ejemplo}`); */
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge/>, container);