var db = require("../models");

module.exports = function(server){
    server.get("/api/products", function(req,res){
    db.Products.findAll({}).then(function(dbProducts){
        res.json(dbProducts);
    });
    });

    server.get("/api/product/:id", function(req, res) {
      db.Products.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(dbProduct) {
        res.json(dbProduct);
      });
    });

    server.post("/api/cart", function(req, res) {
        db.Cart.create(req.body).then(function(dbcart) {
          res.json(dbcart);
        });
      });

    
        server.put("/api/update", function(req, res) {
        console.log();

        
        for(let x = 0; x < req.body.cart.length; x++){
          let proId= parseInt(req.body.cart[x].productId);
          let proQty= parseInt(req.body.cart[x].productQty);
          let proOriQty = parseInt(req.body.cart[x]. productOriginalQuan);
          const updateQTY = proOriQty - proQty;
        
          db.Products.update(
            {quantity: updateQTY},
            {
              where: {
                id: proId
              }
            }).then(function(dbPost) {
              res.json(req.body);
          });
        }

        });
        
      


      

    
};