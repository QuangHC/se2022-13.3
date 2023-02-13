module.exports = function (app, obj, binance) {
    // binance.futuresMiniTickerStream('BTCUSDT', (data) => {
    //     //console.log(data.close);
    //     app.io.sockets.emit("server-send-prices", data.close);
    // });


    app.get("/", function (req, res) {
        // res.send("Hello" + obj.API);
        res.render("master");
    });
}


