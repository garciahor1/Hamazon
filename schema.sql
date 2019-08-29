create database hamazon;
use hamazon;


insert into Products (imageURL,name,description,price,quantity,category) values ("http://jehancancook.com/wp-content/uploads/2018/10/Bacon-Jam-8-1440x1783.jpg", "can cook ham", "this is the best ham", 20, 40, "produce");
insert into Products (imageURL,name,description,price,quantity,category) values ("https://www.smithfieldmarketplace.com/images/popup/912_550.jpg", "mega ham", "this is the smoked", 4, 4, "produce");

insert into Products (imageURL,name,description,price,quantity,category) values ("https://images-na.ssl-images-amazon.com/images/I/51tqDBJuorL.jpg", "Wolferman's", "uses a time-honored tradition of hickory smoking, slow cooking, and aging for four to six months to create this succulent and flavorful spiral-sliced ham", 50, 4, "produce");
insert into Products (imageURL,name,description,price,quantity,category) values ("https://images-na.ssl-images-amazon.com/images/I/81llgUpcFjL._SX522_.jpg", "Dan the Sausageman's", "Yukon Gourmet Gift Basket -Featuring Dan's Original Sausage, 100% Wisconsin Cheese, and Dan's Sweet Hot Mustard", 39, 4, "produce");
insert into Products (imageURL,name,description,price,quantity,category) values ("https://images-na.ssl-images-amazon.com/images/I/51t7m0OhtnL.jpg", "Gourmet Foods", "Gourmet Foods, 12-14 LB. BONE-IN SPIRAL-SLICED HAM", 299, 4, "produce");
insert into Products (imageURL,name,description,price,quantity,category) values ("https://images-na.ssl-images-amazon.com/images/I/61R8m6%2B2i0L._SX522_.jpg", "Iberico Ham ", "Iberico Ham 100%"Pata Negra" Bellota Cured for 2 Years, 12 to 13 lb. 20-25 Servings", 350, 4, "produce");
insert into Products (imageURL,name,description,price,quantity,category) values ("https://images-na.ssl-images-amazon.com/images/I/915m8x2BC1L._SL1500_.jpg", "Dietz & Watson", "Dietz & Watson Fully Cooked Chef Carved Dinner Ham, 3 lb", 4, 6, "produce");
insert into Products (imageURL,name,description,price,quantity,category) values ("https://www.seriouseats.com/recipes/images/20101215-ham-tasting-primary.jpeg", " Benton's", "Cherry Coke-Glazed Country Ham", 80, 4, "produce");

 npx sequelize-cli db:seed:all