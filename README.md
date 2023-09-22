# Welcome to CoffeeLabs ☕

<div align="center">
  <a target="_blank" href="https://coffeelabs.onrender.com/api/v1/docs/">
    <img alt="CoffeeLabs" title="CoffeeLabs" src="https://res.cloudinary.com/divjxvhtz/image/upload/v1695416539/coffeelabs_nyx1bt.png" />
  </a>
</div>

<div align="center">
  <a target="_blank" href="https://nodejs.org">
    <img title="NodeJS alt="NodeJS badge" src="https://img.shields.io/badge/18.8.0-NodeJS-339933?style&logo=node.js" />
  </a>
  <a target="_blank" href="https://www.javascript.com/">
    <img title="JavaScript" alt="JavaScript badge" src="https://img.shields.io/badge/ES6-JavaScript-FFCA28?style&logo=javascript" />
  </a>
  <a target="_blank" href="https://expressjs.com">
    <img title="ExpressJS alt="ExpressJS badge" src="https://img.shields.io/badge/4.18.2-ExpressJS-E0120C?style&logo=express.js" />
  </a>
  <a target="_blank" href="https://www.mongodb.com">
    <img title="MongoDB alt="MongoDB badge" src="https://img.shields.io/badge/6.1.0-MongoDB-339933?style&logo=mongodb" />
  </a>
  <a target="_blank" href="https://www.mongodb.com">
    <img title="Mongoose alt="Mongoose badge" src="https://img.shields.io/badge/7.5.2-Mongoose-E6522C?style&logo=mongoose" />
  </a>
  <a target="_blank" href="https://www.npmjs.com/package/dotenv">
    <img title="Dotenv alt="Dotenv badge" src="https://img.shields.io/badge/16.3.1-Dotenv-FFCA28?style&logo=dotenv" />
  </a>
  <a target="_blank" href="https://swagger.io/">
    <img title="Swagger alt="Swagger badge" src="https://img.shields.io/badge/6.2.8-Swagger-339933?style&logo=swagger" />
  </a>
</div>

<br/>

<div align="center">
  <h3 align="center"><strong>CoffeeLabs, a coffee shop specializing in the sale of coffee products.</strong></h3>
</div>

## 🦾 Technologies

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com)
- [Express.js](https://expressjs.com)
- [Mongoose](https://mongoosejs.com/)
- [Swagger](https://swagger.io/)

## 🚀 Get Started

Deploy:
[CoffeeLabs](https://coffeelabs.onrender.com/api/v1/docs/)

You need to be using:

- [Git](https://git-scm.com/downloads)
- [Nodejs v18 or higher](https://nodejs.org/download/)

Clone the repository & install dependencies:

```bash
git clone git@github.com:7-18/coffeelabs.git
cd coffeelabs
npm install
npm run start
go to http://localhost:4000/api/v1/docs
```

<div align="center">
  <a target="_blank" href="https://coffeelabs.onrender.com/api/v1/docs/">
    <img alt="CoffeeLabs" title="CoffeeLabs" src="https://res.cloudinary.com/divjxvhtz/image/upload/v1695416309/coffeelabs_products_ldrjdh.png" />
  </a>
  <a target="_blank" href="https://coffeelabs.onrender.com/api/v1/docs/">
    <img alt="CoffeeLabs" title="CoffeeLabs" src="https://res.cloudinary.com/divjxvhtz/image/upload/v1695416310/coffeelabs_listproducts_gnwyqd.png" />
  </a>
</div>

## You can... 📚

- Create, update and delete products, pay methods and clasifications.
- Add sales.
- Manage your inventory, see stock available and total sales.
- See all the data.

### Collection 📃

#### Product Model
```json
{
  "_id": "650d055db8b6303337f3906a",
  "name": "Ground Coffee",
  "description": "Freshly ground coffee beans",
  "stock": 100,
  "price": 12.99,
  "classification_id": "5e7c56c4719a504b9f40e4e1",
  "register_at": "2023-09-22T03:09:17.838+00:00",
  "update_at": "2023-09-22T13:45:02.838+00:00"
}
```

#### Classification Model
```json
{
  "_id": "5e7c56c4719a504b9f40e4e1",
  "name": "Coffee Beans",
  "register_at": "2023-09-22T03:09:17.838+00:00",
  "update_at": "2023-09-22T13:45:02.838+00:00"
}
```

#### Sale Model
```json
{
  "_id": "5e7c56c4719a504b9f40e4e2",
  "product_id": "650d055db8b6303337f3906a",
  "payment_method": "Credit Card",
  "quantity": 3,
  "total_amount": 38.97,
  "register_at": "2023-09-22T09:15:42.123+00:00"
}
```

### Env 👀
In the env_example file I leave a guide of what your private .env file should look like, please review it.
