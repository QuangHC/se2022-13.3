const ccxt = require('ccxt');
const moment = require('moment');
const delay = require('delay');
RSI_OVERBOUGHT = 70;
RSI_OVERSOLD = 69;
AMOUNT = 0.001;

const binance = new ccxt.binance({
    apiKey: 'EPjRvlWCGUKEegQ6qxAYBR3EWEhpyV2PFJifroza4qbj7dH5xRWvehiNZQvAerUS',
    secret: 'gMPo4NxCwoBYvGtnTpfcXFP2KeMx0m5gfFwRB9WCFEHugrHM5Ylk5806dLn841YI',
});

binance.setSandboxMode(true)

var resp = "";

async function sendBalance(btcPrice) {
    const balance = await binance.fetchBalance();
    const total = balance.total;
    var btc = total.BTC;
    var usdt = total.USDT;
    var totalUSDT = (total.BTC - 1) * btcPrice + total.USDT;
    resp = (btc + " " + usdt + " " + totalUSDT);
}
var state = "";

async function tick(amount) {
    const closes = [];
    const prices = await binance.fetchOHLCV('BTC/USDT', timeframe='1m', undefined, 14);
    AMOUNT = amount;

    for (let i = 0; i < prices.length; i++) {
        closes.push(prices[i][4]);
    }

    // Thuat toan chi so RSI
    console.log(closes);
    rsi = CalculateRsi(closes);
    console.log(AMOUNT);
    if (rsi > RSI_OVERBOUGHT) {
        console.log("SELL");
        await binance.createMarketOrder('BTC/USDT', 'sell', AMOUNT);
    }
    else if (rsi < RSI_OVERSOLD) {
        console.log("BUY");
        await binance.createMarketOrder('BTC/USDT', 'buy', AMOUNT);
    }
    else {
        console.log("Nothing");
    }
    await sendBalance(closes[closes.length - 1]);
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

module.exports = async function trade(s, amount) {
    state = s;
    while (state == "on") {
        await tick(amount);
        console.log("Balance " + resp);
        await delay(60 * 100);
    }
}






