'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Products',[{
     imageURL:"https://www.seriouseats.com/recipes/images/20101215-ham-tasting-primary.jpeg",
     name:" Benton's",
     description:"Cherry Coke-Glazed Country Ham",
     price:350,
     quantity:2,
     category:"meats"
      },{
        imageURL:"https://images-na.ssl-images-amazon.com/images/I/915m8x2BC1L._SL1500_.jpg",
     name:"Dietz & Watson",
     description:"Dietz & Watson Fully Cooked Chef Carved Dinner Ham",
     price:90,
     quantity:10,
     category:"meats" 
      },{
        imageURL:"https://images-na.ssl-images-amazon.com/images/I/61R8m6%2B2i0L._SX522_.jpg",
     name:"Iberico Ham",
     description:"Iberico Ham 100% Pata Negra Bellota Cured for 2 Years, 12 to 13 lb. 20-25 Servings",
     price:350,
     quantity:1,
     category:"meats" 
      },{
        imageURL:"https://images-na.ssl-images-amazon.com/images/I/51t7m0OhtnL.jpg",
     name:"Gourmet Foods",
     description:"Gourmet Foods, 12-14 LB. BONE-IN SPIRAL-SLICED HAM",
     price:299,
     quantity:3,
     category:"meats" 
      },{
        imageURL:"https://images-na.ssl-images-amazon.com/images/I/81llgUpcFjL._SX522_.jpg",
     name:"Dan the Sausageman's",
     description:"Yukon Gourmet Gift Basket -Featuring Dan's Original Sausage, 100% Wisconsin Cheese, and Dan's Sweet Hot Mustard",
     price:39,
     quantity:3,
     category:"meats" 
      },{
        imageURL:"https://images-na.ssl-images-amazon.com/images/I/51tqDBJuorL.jpg",
     name:"Wolferman's",
     description:"uses a time-honored tradition of hickory smoking, slow cooking, and aging for four to six months to create this succulent and flavorful spiral-sliced ham",
     price:50,
     quantity:8,
     category:"meats" 
      },{
        imageURL:"https://www.smithfieldmarketplace.com/images/popup/912_550.jpg", 
     name:"smithfield",
     description:"slow cooking, and aging for four to six months to create this succulent and flavorful spiral-sliced ham",
     price:55,
     quantity:7,
     category:"meats" 
      },{
        imageURL:"http://jehancancook.com/wp-content/uploads/2018/10/Bacon-Jam-8-1440x1783.jpg", 
     name:"jehancan",
     description:"slow cooking to create this succulent and flavorful spiral-sliced ham",
     price:20,
     quantity:90,
     category:"meats" 
      }],{});
  },
  down: (queryInterface, Sequelize) => {
   
   return queryInterface.bulkDelete('Products', null, {});

  }
};
