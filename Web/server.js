var express = require("express");
const ccxt = require('ccxt');
const Binance = require('node-binance-api');
var fs = require("fs");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
var server = require("http").Server(app);

var io = require("socket.io")(server);
app.io = io;
server.listen(3000);
io.on("connection", function (socket) {
    console.log("New connection: " + socket.id);
})

loadConfigFile("./config.json");
function loadConfigFile(file) {
    var obj;
    fs.readFile(file, "utf-8", function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        const binanceSend = new Binance().options({
            APIKEY: obj.API,
            APISECRET: obj.KEY
        });
        const binance = new ccxt.binance({
            apiKey: 'EPjRvlWCGUKEegQ6qxAYBR3EWEhpyV2PFJifroza4qbj7dH5xRWvehiNZQvAerUS',
            secret: 'gMPo4NxCwoBYvGtnTpfcXFP2KeMx0m5gfFwRB9WCFEHugrHM5Ylk5806dLn841YI',
        });
        binance.setSandboxMode(true);
        require("./routes/client")(app, obj, binance, binanceSend);
    });
}