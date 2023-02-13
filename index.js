const ccxt = require('ccxt');
const moment = require('moment');
const delay = require('delay');

const binance = new ccxt.binance({
    apiKey: 'EPjRvlWCGUKEegQ6qxAYBR3EWEhpyV2PFJifroza4qbj7dH5xRWvehiNZQvAerUS',
    secret: 'gMPo4NxCwoBYvGtnTpfcXFP2KeMx0m5gfFwRB9WCFEHugrHM5Ylk5806dLn841YI',
});

binance.setSandboxMode(true)

async function printBalance(btcPrice){
    const balance = await binance.fetchBalance();
    const total = balance.total;
    console.log(`Balance: BTC ${total.BTC}, USDT: ${total.USDT}`);
    console.log(`Total USDT: ${(total.BTC - 1) * btcPrice + total.USDT}. \n`);
    // console.log(balance);
}

async function tick(){
    const prices = await binance.fetchOHLCV('BTC/USDT', '1m', undefined, 5);
    const bPrices = prices.map(price => {
        return {
            timestamp: moment(price[0]).format(),
            open: price[1], 
            high: price[2], 
            low: price[3], 
            close: price[4], 
            volume: price[5]
        }
    })

    const averagePrice = bPrices.reduce((acc, price) => acc + price.close, 0) / 5
    const lastPrice = bPrices[bPrices.length-1].close

    console.log(bPrices.map(p => p.close), averagePrice, lastPrice);


    // Thuat toan du dinh bat day
    const direction = lastPrice > averagePrice ? 'sell' : 'buy'
    const TRADE_SIZE = 100
    const quantity = TRADE_SIZE / lastPrice

    console.log(`Average price: ${averagePrice}. Last price: ${lastPrice}`)
    const order = await binance.createMarketOrder('BTC/USDT', direction, quantity)
    console.log(`${moment().format()}: ${direction} ${quantity} BTC at ${lastPrice}`)
    
    printBalance(lastPrice)
}

async function main(){
    while(true){
        await tick();
        await delay(60*100);
    }
    
}
module.exports = async () => {
    let res = {};
    const prices = await binance.fetchOHLCV('BTC/USDT', '1m', undefined, 5);
    const bPrices = prices.map(price => {
        return {
            timestamp: moment(price[0]).format(),
            open: price[1], 
            high: price[2], 
            low: price[3], 
            close: price[4], 
            volume: price[5]
        }
    })
    
    const averagePrice = bPrices.reduce((acc, price) => acc + price.close, 0) / 5
    const lastPrice = bPrices[bPrices.length-1].close
    
    //res += `${bPrices.map(p => p.close)} ${averagePrice} ${lastPrice} \n`
    const direction = lastPrice > averagePrice ? 'sell' : 'buy'
    const TRADE_SIZE = 100
    const quantity = TRADE_SIZE / lastPrice
    
    const order = await binance.createMarketOrder('BTC/USDT', direction, quantity)
    
    const balance = await binance.fetchBalance();
    const total = balance.total;
    
    res = {
        time: moment().format(),
        direction,
        quantity
    }
    
    return res;
}

// main();
// printBalance();