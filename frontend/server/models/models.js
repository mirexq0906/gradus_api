const sequelize = require('../db') 
const {DataTypes} = require('sequelize') 
 
const Category = sequelize.define('category', { 
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
    name: {type: DataTypes.STRING, validate: {len: {args: [3, 50], msg: 'Длина поля "название" должна быть не менее 3 и не более 50 знаков'}}, allowNull: false},  
    url: {type: DataTypes.STRING, validate: {len: {args: [3, 20], msg: 'Длина поля "url" должна быть не менее 3 и не более 20 знаков'}}, allowNull: false}
}) 
         
const SubCategory = sequelize.define('subCategory', { 
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, validate: {len: {args: [3, 50], msg: 'Длина поля "название" должна быть не менее 3 и не более 50 знаков'}}, allowNull: false}, 
    img: {type: DataTypes.STRING, validate: {notEmpty: true},allowNull: false},
    url: {type: DataTypes.STRING, validate: {len: {args: [3, 20], msg: 'Длина поля "url" должна быть не менее 3 и не более 20 знаков'}}, allowNull: false} 
}) 
   
const Product = sequelize.define('product', { 
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, validate: {len: {args: [3, 50]}}, allowNull: false}, 
    img: {type: DataTypes.STRING, allowNull: false},
    gallery: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false},
    url: {type: DataTypes.STRING, validate: {len: {args: [3, 100]}}, allowNull: false},
    price: {type: DataTypes.INTEGER, validate: {isInt: { msg: 'В поле "цена" должны быть цифры'}}, allowNull: false},
    oldPrice: {type: DataTypes.INTEGER, validate: {isInt: { msg: 'В поле "старая цена" должны быть цифры'}}, allowNull: false},
    desc: {type: DataTypes.TEXT, allowNull: false},
}) 
      
const Blog = sequelize.define('blog', { 
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
    name: {type: DataTypes.STRING, validate: {len: {args: [3, 50]}}, allowNull: false}, 
    url: {type: DataTypes.STRING, validate: {len: {args: [3, 50]}}, allowNull: false},
    desc: {type: DataTypes.TEXT, allowNull: false},
    detailed: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    views: {type: DataTypes.INTEGER, allowNull: false}, 
})  
 
const Video = sequelize.define('video', { 
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
    name: {type: DataTypes.STRING, validate: {len: {args: [3, 50]}}, allowNull: false}, 
    url: {type: DataTypes.TEXT, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})  

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const FavoriteProduct = sequelize.define('favorite', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})
 
const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
}) 

const UserData = sequelize.define('dataUser', { 
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
    name: {type: DataTypes.STRING, allowNull: false}, 
    date: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.STRING, allowNull: false},
    adress: {type: DataTypes.STRING, allowNull: false},
}) 

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    products: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false}, 
    phone: {type: DataTypes.STRING, allowNull: false},
    fullName: {type: DataTypes.STRING, allowNull: false}, 
    email: {type: DataTypes.STRING, unique: false,},
    adress: {type: DataTypes.STRING, allowNull: false},
    payment: {type: DataTypes.STRING, allowNull: false},
    delivery: {type: DataTypes.STRING, allowNull: false},
    totalPrice: {type: DataTypes.INTEGER, allowNull: false}, 
})

const OrderKits = sequelize.define('orderKits', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    products: {type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false},
    phone: {type: DataTypes.STRING,  validate: {len: {args: [11, 20], msg: 'Количество цифр в номере телефона должна быть 11'}}, allowNull: false},
    fullName: {type: DataTypes.STRING, validate: {len: {args: [2, 20], msg: 'Длина поля "имя" должна быть не менее 2 и не более 20 знаков'}}, allowNull: false}, 
    totalPrice: {type: DataTypes.INTEGER, allowNull: false}, 
})

const CallClient = sequelize.define('callClient', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, validate: {len: {args: [2, 20], msg: 'Длина поля "имя" должна быть не менее 2 и не более 20 знаков'}}, allowNull: false}, 
    phone: {type: DataTypes.STRING, validate: {len: {args: [2, 20], msg: 'Количество цифр в поле "телефон" должно быть 11'}}, allowNull: false},
}) 

const EmailClient = sequelize.define('emailClient', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, validate: {len: {args: [6, 40], msg: 'Длина поля "email" должна быть не менее 6 и не более 40 знаков'}},  allowNull: false},
}) 

const ProductWeek = sequelize.define('productWeek', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
}) 

const Banner = sequelize.define('banner', { 
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
    img: {type: DataTypes.STRING, allowNull: false},
})  

Category.hasMany(SubCategory)
SubCategory.belongsTo(Category)

SubCategory.hasMany(Product)
Product.belongsTo(SubCategory)

Category.hasMany(Product)
Product.belongsTo(Category)

Category.hasMany(Blog)
Blog.belongsTo(Category)

Category.hasMany(Video)
Video.belongsTo(Category)

User.hasOne(Basket)
Basket.belongsTo(User)

Product.hasMany(Basket)
Basket.belongsTo(Product) 

User.hasOne(FavoriteProduct)
FavoriteProduct.belongsTo(User)

Product.hasMany(FavoriteProduct)
FavoriteProduct.belongsTo(Product) 

User.hasOne(UserData)
UserData.belongsTo(User)
  
User.hasMany(Order)
Order.belongsTo(User)

Product.hasMany(ProductWeek)
ProductWeek.belongsTo(Product)  
 
module.exports = { 
    Category,
    SubCategory,
    Product, 
    Blog,
    Video, 
    Basket,
    FavoriteProduct,
    User,
    UserData,
    Order,
    OrderKits,
    CallClient,
    EmailClient,
    ProductWeek,
    Banner
}