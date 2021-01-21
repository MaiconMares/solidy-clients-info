import _ from 'lodash';
import './style.css';
import Logo from './logo.png';

function component() {
    const myLogo = new Image();
    myLogo.src = Logo;

    let header = document.getElementsByClassName('header')[0];
    header.appendChild(myLogo);
    
}

component();