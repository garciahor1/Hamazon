const path = require("path");

module.exports = function(server){

    server.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    server.get("/cart", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/cart.html"));
    });

};