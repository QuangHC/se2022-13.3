const ccxt = require('ccxt');
const moment = require('moment');
const delay = require('delay');
RSI_OVERBOUGHT = 70;
RSI_OVERSOLD = 30;

const binance = new ccxt.binance({
    apiKey: 'EPjRvlWCGUKEegQ6qxAYBR3EWEhpyV2PFJifroza4qbj7dH5xRWvehiNZQvAerUS',
    secret: 'gMPo4NxCwoBYvGtnTpfcXFP2KeMx0m5gfFwRB9WCFEHugrHM5Ylk5806dLn841YI',
});

binance.setSandboxMode(true)

async function printBalance() {
    const balance = await binance.fetchBalance();
    const total = balance.total;
    console.log(`Balance: BTC ${total.BTC}, USDT: ${total.USDT}`);
    //console.log(`Total USDT: ${(total.BTC - 1) * btcPrice + total.USDT}. \n`);
    // console.log(balance);
}

async function tick() {
    const closes = [];
    const prices = await binance.fetchOHLCV('BTC/USDT', '1m', undefined, 14);

    for (let i = 0; i < prices.length; i++) {
        closes.push(prices[i][4]);
    }

    // Thuat toan chi so RSI
    console.log(closes);
    rsi = CalculateRsi(closes);
    if (rsi > RSI_OVERBOUGHT) {
        console.log("SELL");
        await binance.createMarketOrder('BTC/USDT', 'sell', 0.01);
    }
    else if (rsi < RSI_OVERSOLD) {
        console.log("BUY");
        await binance.createMarketOrder('BTC/USDT', 'buy', 0.01);
    }
    else {
        console.log("Nothing");
    }
    printBalance();
}

function CalculateRsi(closePrices) {
    const prices = Array.from(closePrices);
    const Tolerance = 10e-20;
    var sumGain = 0;
    var sumLoss = 0;
    for (let i = 1; i < prices.length; i++) {
        var difference = prices[i] - prices[i - 1];
        if (difference >= 0) {
            sumGain += difference;
        }
        else {
            sumLoss -= difference;
        }
    }

    if (sumGain == 0) return 0;
    if (Math.abs(sumLoss) < Tolerance) return 100;
    var relativeStrength = sumGain / sumLoss;
    return 100.0 - (100.0 / (1 + relativeStrength));
}

var state = "";
module.exports = async function trade(s) {
    state = s;
    while (state == "on") {
        await tick();
        await delay(60 * 100);
    }
}







