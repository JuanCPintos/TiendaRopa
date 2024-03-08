const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const uri = process.env.MONGO_ATLAS_URI;

const client = new MongoClient(uri);

const addProducts = async (req, res) => {

    let name = req.body.name;
    let price = req.body.price;
    let stock = req.body.stock;

    console.log(`name: ${name}, price: ${price}, stock: ${stock}`);

    try {
        await client.connect();
        const database = client.db('tienda');
        const collection = database.collection('productos');
        const result = await collection.insertOne(req.body);
        res.json(result);
    } catch (error) {
        res.json({error: error.message});
    }
}

const listProducts = (req, res) => {
    // try {
    //     await client.connect();
    //     const database = client.db('tienda');
    //     const collection = database.collection('productos');
    //     const result = await collection.find({}).toArray();
    //     res.json(result);
    // } catch (error) {
    //     res.json({error: error.message});
    // }
    res.render('products');
};

const updateProducts = (req, res) => {};

const deleteProducts = (req, res) => {};

const getProductById = (req, res) => {};

const getProductsByCategory = (req, res) => {};

const getProductsByPrice = (req, res) => {};

module.exports = {
    addProducts,
    listProducts,
    updateProducts,
    deleteProducts,
    getProductById,
    getProductsByCategory,
    getProductsByPrice
};

