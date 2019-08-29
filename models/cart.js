module.exports = function(sequelize,DataType){
    const Cart = sequelize.define("Cart",{
        productId:{
           type: DataType.INTEGER,
           allowNull: false,
       },
       productQty:{
           type: DataType.INTEGER,
           allowNull: false,
       }
    },{
        timestamps: false
    });
    
  
    return Cart;
    };
    