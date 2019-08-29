var express = require("express");
var server = express();

var PORT = process.env.PORT || 8080;

var db = require("./models");

server.use(express.urlencoded({extended:true}));
server.use(express.json());
server.use(express.static("./public"));
require("./routes/html-routes.js")(server);
require("./routes/api-routes.js")(server);

db.sequelize.sync({force: true}).then(function(){
    server.listen(PORT,function(){
        console.log("server is working listening on PORT " + PORT);
});
});