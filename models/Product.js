module.exports = function(sequelize,DataType){
const Product = sequelize.define("Products",{
   imageURL:{
       type: DataType.STRING,
       allowNull: false,
   },
   name:{
       type: DataType.STRING,
       allowNull: false,
       validate:{
           len:[2,50]
       }
   },
   description:{
       type: DataType.STRING,
       allowNull: false,
       validate:{
           len:[5,200]
       }
   },
   price:{
       type: DataType.INTEGER,
       allowNull: false,
       validate:{
           len:[1,6]
       }
   },
   quantity:{
       type: DataType.INTEGER,
       allowNull: false,
       validate:{
           len:[1,6]
       }
    },
    category:{
        type: DataType.STRING,
        allowNull: false,
        validate:{
            len:[2,30]
        }
    },
},{
    timestamps: false
});




return Product;
};
