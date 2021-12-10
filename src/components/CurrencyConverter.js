import React, { useState } from 'react';
import axios from 'axios';
import Exchange from './Exchange';

export default function CurrencyConverter() {
    const currencies = ['BTC', 'ETH', 'USD'];
    const [chooseInitialCurr, setChooseInitialCurr] = useState('BTC');
    const [chooseFinalCurr, setChooseFinalCurr] = useState('BTC');
    const [initAmount, setInitAmount] = useState('');
    const [result, setResult] = useState('');

    const convert = () => {

        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: { from_currency: chooseInitialCurr, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chooseFinalCurr },
            headers: {
                'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
                'x-rapidapi-key': 'd82d8cc75bmshc07b9ac0dd8b90dp1a6bdbjsn6a6323be1f18'
            }
        };

        axios.request(options).then((response) => {
            setResult(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] * initAmount)
        }).catch((error) => {
            console.error(error);
        });
    }

    return (
        <div className="converter">
            <h3 className="converterTitle">Converter</h3>
            <div  className="initialArea">
                <span>InitialCurrency: </span>
                <input
                    type="number"
                    name="curren-amount-1"
                    value={initAmount}
                    onChange={(e) => setInitAmount(e.target.value)}
                />
                <span>
                    <select
                        className="initeSelect"
                        value={chooseInitialCurr}
                        name="curren-option-1"
                        onChange={(e) => setChooseInitialCurr(e.target.value)}
                    >
                        {currencies.map((curr, index) => (<option key="index">{curr}</option>))}
                    </select>
                </span>
            </div>
            <div className="finalArea">
                <span>You will get: </span>
                <span italic>{result}</span>
                <span>
                    <select
                        className="finalSelect"
                        value={chooseFinalCurr}
                        name="curren-option-2"
                        onChange={(e) => setChooseFinalCurr(e.target.value)}
                    >
                        {currencies.map((curr, index) => (<option key="index">{curr}</option>))}
                    </select>
                </span>
            </div>
            <button className="convertButton" type="button" onClick={convert}>Convert</button>
        </div>
    )
}
