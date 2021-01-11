import React from 'react';
import '../../assets/styles/global.css';
import './style-menu.css';
import Icon from '../../assets/images/icon.png';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div className="container-menu">
            <nav>
                <ul>
                    <Link to="/"><img id="image-logo" src={Icon} alt="free logo" /></Link>
                </ul>
                <ul className="ul-options">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/Sobre">SOBRE</Link></li>
                </ul>
            </nav>
        </div>
    );
}  