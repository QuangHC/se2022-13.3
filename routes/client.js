module.exports = function (app, obj, binance) {
    binance.futuresMiniTickerStream('BTCUSDT', (data) => {
        //console.log(data.close);
        app.io.sockets.emit("server-send-prices", data.close);
    });
   
    app.get("/off", function(req, res) {
        console.log("Bot is ended!");
        require('../bot')("off", 0.01);
        res.render("master");
    });

    app.get("/on/:amount", function(req, res) {
        var quantity = parseFloat(req.params.amount);
        console.log("Bot is running!");
        require('../bot')("on", quantity);
        res.render("master");
    });

    app.get("/", function (req, res) {
        res.render("master");
    });
}



