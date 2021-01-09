import React from 'react';
import '../../assets/styles/global.css';
import Menu from '../../components/menu';
import './style-sobre.css';


export default function Sobre() {
    return (
        <div className="container-home">
            <div className="menu">
                <Menu />
            </div>
            <div className="sobre-informations">
                <div className="align-information-one">
                    <h1>Como funciona a valorização de uma moeda?</h1>
                    <p>Quanto mais positivo for o saldo da balança comercial
                    (ou seja, quanto mais dólares entrarem no país), mais valorizada
                está a moeda e, portanto, mais alta é a variação cambial.</p>
                </div><br />
                <div className="align-information-two">
                    <h1>API's que estou utilizando</h1>
                    <p>A api em utilização é a do Banco Central Europeu, o banco de dados
                    é atualizado todos os dias (isso pode ser conferido na home) com isso
                    as moedas sempre estarão atualizadas (conforme o banco central Europeu).
                </p>
                    <a href="https://exchangeratesapi.io/" target="_blank" rel="noopener noreferrer">Clique aqui para ver a API</a>
                </div>
            </div>
        </div>
    );
}