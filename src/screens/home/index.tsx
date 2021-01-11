import { Console } from 'console';
import React, { useEffect, useState } from 'react';
import Menu from '../../components/menu';
import trashIcon from '../../assets/images/trash-icon.png';
import '../../assets/styles/global.css';
import './style-home.css';


export default function Home() {

    const [valueOne, setValueOne] = useState('');
    const [valueTwo, setValueTwo] = useState('');

    const [selectOne, setSelectOne] = useState('');
    const [selectTwo, setSelectTwo] = useState('');

    const [currencyEur, setCurrencyEur] = useState([]);
    const [currencyUsd, setCurrencyUsd] = useState([]);
    const [currencyCad, setCurrencyCad] = useState([]);
    const [currencyBrl, setCurrencyBrl] = useState([]);
    const [currencyJpy, setCurrencyJpy] = useState([]);

    const [lastDate, setLastDate] = useState('');

    useEffect(() => {
        eur();
        usd();
        cad();
        brl();
        jpy();
    }, []);


    const eur = () => {
        const urlEur = 'https://api.exchangeratesapi.io/latest';
        fetch(urlEur, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(moedas => {
                const currency = Object.values(moedas)[0] as any
                setCurrencyEur(currency);

                //console.log(Object.values(currency)[15] as any) 
                // console.log(currency) 

                const LastDate = Object.values(moedas)[2] as any;
                setLastDate(LastDate);
            })
            .catch(Erro => console.log(Erro));
    }

    const usd = () => {
        const urlUsd = 'https://api.exchangeratesapi.io/latest?base=USD ';
        fetch(urlUsd, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(moedas => {
                const currency = Object.values(moedas)[0] as any
                setCurrencyUsd(currency);

                console.log(Object.values(currency)[15] as any) 
                console.log(currency) 
            })
            .catch(Erro => console.log(Erro));
    }

    const cad = () => {
        const urlUsd = 'https://api.exchangeratesapi.io/latest?base=CAD ';
        fetch(urlUsd, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(moedas => {
                const currency = Object.values(moedas)[0] as any
                setCurrencyCad(currency);

                // console.log(Object.values(currency)[18] as any) 
                // console.log(currency) 
            })
            .catch(Erro => console.log(Erro));
    }

    const brl = () => {
        const urlUsd = 'https://api.exchangeratesapi.io/latest?base=BRL ';
        fetch(urlUsd, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(moedas => {
                const currency = Object.values(moedas)[0] as any
                setCurrencyBrl(currency);

                // console.log(Object.values(currency)[18] as any) 
                // console.log(currency) 
            })
            .catch(Erro => console.log(Erro));
    }

    const jpy = () => {
        const urlUsd = 'https://api.exchangeratesapi.io/latest?base=JPY ';
        fetch(urlUsd, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(moedas => {
                const currency = Object.values(moedas)[0] as any
                setCurrencyJpy(currency);

                //console.log(Object.values(currency)[26] as any) 
                //console.log(currency) 
            })
            .catch(Erro => console.log(Erro));
    }

    const clear = () => {
        setValueOne('');
        setValueTwo('');
    }

    const converting = () => {
        // Caso o usuario coloque o valor no primeiro input
        switch (selectOne) {
            case "USD":
                if (selectTwo == "BRL") {
                    const calculo = parseFloat(valueOne) * Object.values(currencyUsd)[12] as any;
                    const formater = calculo.toFixed(2);
                    setValueTwo(formater + '')
                }
                else if (selectTwo == "EUR") {
                    const calculo = parseFloat(valueOne) * Object.values(currencyUsd)[18] as any;
                    const formater = calculo.toFixed(2);
                    setValueTwo(formater + '');
                }
                else if (selectTwo == "CAD") {
                    const calculo = parseFloat(valueOne) * Object.values(currencyUsd)[0] as any;
                    const formater = calculo.toFixed(2);
                    setValueTwo(formater + '');
                }
                else if (selectTwo == "JPY") {
                    const calculo = parseFloat(valueOne) * Object.values(currencyUsd)[15] as any;;
                    const formater = calculo.toFixed(2);
                    setValueTwo(formater + '');
                }
                else if (selectTwo == "USD") {
                    var text = "Mesmo valor"
                    setValueTwo(text);
                }
                break;

            case "BRL":
                if (selectTwo == "USD") {
                    const calculo = parseFloat(valueOne) * Object.values(currencyBrl)[26] as any;
                    const formater = calculo.toFixed(2);
                    setValueTwo(formater + '');
                }
                else if (selectTwo == "EUR") {
                    const calculo = parseFloat(valueOne) * Object.values(currencyBrl)[18] as any;
                    const formater = calculo.toFixed(2);
                    setValueTwo(formater + '');
                }
                else if (selectTwo == "CAD") {
                    const calculo = parseFloat(valueOne) * Object.values(currencyBrl)[0] as any;
                    const formater = calculo.toFixed(2);
                    setValueTwo(formater + '');
                }
                else if (selectTwo == "JPY") {
                    const calculo = parseFloat(valueOne) * Object.values(currencyBrl)[15] as any;;
                    const formater = calculo.toFixed(2);
                    setValueTwo(formater + '');
                }
                else if (selectTwo == "BRL") {
                    var text = "Mesmo valor"
                    setValueTwo(text);
                }
                break;

            case "EUR":
                if (selectTwo == "USD") {
                    const calculo = parseFloat(valueOne) * Object.values(currencyEur)[26] as any;
                    const formater = calculo.toFixed(2);
                    setValueTwo(formater + '');
                }
                else if (selectTwo == "BRL") {
                    const calculo = parseFloat(valueOne) * Object.values(currencyEur)[12] as any;
                    const formater = calculo.toFixed(2);
                    setValueTwo(formater + '');
                }
                else if (selectTwo == "CAD") {
                    const calculo = parseFloat(valueOne) * Object.values(currencyEur)[0] as any;
                    const formater = calculo.toFixed(2);
                    setValueTwo(formater + '');
                }
                else if (selectTwo == "JPY") {
                    const calculo = parseFloat(valueOne) * Object.values(currencyEur)[15] as any;;
                    const formater = calculo.toFixed(2);
                    setValueTwo(formater + '');
                }
                else if (selectTwo == "EUR") {
                    var text = "Mesmo valor"
                    setValueTwo(text);
                }
                break;

            case "CAD":
                if (selectTwo == "USD") {
                    const calculo = parseFloat(valueOne) * Object.values(currencyCad)[26] as any;;
                    const formater = calculo.toFixed(2);
                    setValueTwo(formater + '');
                }
                else if (selectTwo == "BRL") {
                    const calculo = parseFloat(valueOne) * Object.values(currencyCad)[12] as any;;
                    const formater = calculo.toFixed(2);
                    setValueTwo(formater + '');
                }
                else if (selectTwo == "EUR") {
                    const calculo = parseFloat(valueOne) * Object.values(currencyCad)[18] as any;;
                    const formater = calculo.toFixed(2);
                    setValueTwo(formater + '');
                }
                else if (selectTwo == "JPY") {
                    const calculo = parseFloat(valueOne) * Object.values(currencyCad)[15] as any;;
                    const formater = calculo.toFixed(2);
                    setValueTwo(formater + '');
                }
                else if (selectTwo == "CAD") {
                    var text = "Mesmo valor"
                    setValueTwo(text);
                }
                break;

                case "JPY":
                    if (selectTwo == "USD") {
                        const calculo = parseFloat(valueOne) * Object.values(currencyJpy)[26] as any;;
                        const formater = calculo.toFixed(2);
                        setValueTwo(formater + '');
                    }
                    else if (selectTwo == "BRL") {
                        const calculo = parseFloat(valueOne) * Object.values(currencyJpy)[12] as any;;
                        const formater = calculo.toFixed(2);
                        setValueTwo(formater + '');
                    }
                    else if (selectTwo == "EUR") {
                        const calculo = parseFloat(valueOne) * Object.values(currencyJpy)[18] as any;;
                        const formater = calculo.toFixed(2);
                        setValueTwo(formater + '');
                    }
                    else if (selectTwo == "CAD") {
                        const calculo = parseFloat(valueOne) * Object.values(currencyJpy)[0] as any;;
                        const formater = calculo.toFixed(2);
                        setValueTwo(formater + '');
                    }
                    else if (selectTwo == "JPY") {
                        var text = "Mesmo valor"
                        setValueTwo(text);
                    }
                    break;
            default:
                break;
        }
    }


    return (
        <div className="container-home">
            <div className="menu">
                <Menu />
            </div>
            <div className="align-web">
                <div className="title-date">
                    <h1>Ultima atualização do Banco Central Europeu: {lastDate}</h1>
                </div>
                <div className="align-input">
                    <div className="first-input">
                        <select className="select-moeda" name="moedas" onChange={e => setSelectOne(e.target.value)} >
                            <option value="none" selected disabled>Escolha uma moeda</option>
                            <option value="BRL">BRL - Real</option>
                            <option value="CAD">CAD - Dólar Canadense</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="JPY">JPY - Iene Japonês</option>
                            <option value="USD">USD - Dólar Americano</option>
                        </select>

                    </div>
                    <h1>Para</h1>
                    <div className="second-input">
                        <select className="select-moeda" name="moedas" onChange={e => setSelectTwo(e.target.value)}>
                            <option value="none" selected disabled>Escolha uma moeda</option>
                            <option value="BRL">BRL - Real</option>
                            <option value="CAD">CAD - Dólar Canadense</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="JPY">JPY - Iene Japonês</option>
                            <option value="USD">USD - Dólar Americano</option>
                        </select>

                    </div>
                </div>
                <div className="align-button">
                    <div className="align-icon-with-input">
                        <input id="input-edit" type="number" onClick={clear} placeholder="Valor a ser convertido" onChange={e => setValueOne(e.target.value)} value={valueOne} />
                        {/* <img id="icon-trash" onClick={clear} src={trashIcon} alt="icone de lixo" /> */}
                    </div>
                    <input type="button" onClick={converting} value="Converter" />
                    <div className="align-icon-with-input">
                        <input id="input-edit" type="number" disabled placeholder="Resultado" value={valueTwo} />
                    </div>
                </div>
            </div>
            {/* mobile */}
            <div className="align-mobile">
                <div className="title-date">
                    <h1>Ultima atualização do banco de dados: {lastDate}</h1>
                </div>
                <div className="align-input">
                    <div className="first-input">
                        <select className="select-moeda" name="moedas" onChange={e => setSelectOne(e.target.value)} >
                            <option value="none" selected disabled>Escolha uma moeda</option>
                            <option value="BRL">BRL - Real</option>
                            <option value="CAD">CAD - Dólar Canadense</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="JPY">JPY - Iene Japonês</option>
                            <option value="USD">USD - Dólar Americano</option>
                        </select> <br />
                        <input id="input-edit" type="number" onClick={clear} placeholder="Valor a ser convertido" onChange={e => setValueOne(e.target.value)} value={valueOne} />
                    </div>
                    <div className="second-input">
                        <select className="select-moeda" name="moedas" onChange={e => setSelectTwo(e.target.value)}>
                            <option value="none" selected disabled>Escolha uma moeda</option>
                            <option value="BRL">BRL - Real</option>
                            <option value="CAD">CAD - Dólar Canadense</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="JPY">JPY - Iene Japonês</option>
                            <option value="USD">USD - Dólar Americano</option>
                        </select> <br />
                        <input id="input-edit" type="number" placeholder="Resultado" value={valueTwo} />

                    </div>
                    <div className="align-button">
                        <input type="button" onClick={converting} value="Converter" />
                    </div>
                </div>
            </div>
        </div>
    );
}