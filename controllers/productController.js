const dotenv = require('dotenv');
const Swal = require('sweetalert2');
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

        res.render('products', {products: result});
    } catch (error) {
        res.json({error: error.message});
    }
}

const listProducts = async (req, res) => {
    try {
        await client.connect();
        const database = client.db('tienda');
        const collection = database.collection('productos');
        const result = await collection.find({}).toArray();
        

        res.render('products', {products: result});
        // res.json(result);
    }catch (error) {
        res.json({error: error.message});
    }finally {
        await client.close();
    }
};

const getProduct = async (req, res) => {

    let id = req.params.id;
    let idData = {_id: new ObjectId(id)};

    // console.log(`El id es: ${id} y el idData es: ${idData}`);

    try {
        await client.connect();
        const database = client.db('tienda');
        const collection = database.collection('productos');
        const result = await collection.findOne(idData);

        res.render('edit', {product: result});
    }catch (error) {
        res.json({error: error.message});
    }finally {
        await client.close();
    }
};

const updateProducts = async (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    let price = req.body.price;
    let stock = req.body.stock;
    let product = {name, price, stock};
    let idData = {_id: new ObjectId(id)};

    try {
        await client.connect();
        const database = client.db('tienda');
        const collection = database.collection('productos');
        const result = await collection.updateOne(idData, {$set: product});

        product._id = idData._id;
        console.log(product);

        if (result.modifiedCount === 1) {
            
            res.render(`edit`,{product: product, success: true, error: false});
        } else {
            res.render(`edit`, {product: product, success: false, error: true});
        }
        
        



    }catch (error) {
        res.json({error: error.message});
    }finally {
        await client.close();
    }

    


};

const deleteProduct = async (req, res) => {
    let id = req.params.id;
    let idData = {_id: new ObjectId(id)};

    try {
        await client.connect();
        const database = client.db('tienda');
        const collection = database.collection('productos');
        const result = await collection.findOne(idData);

        res.render('delete', {product: result});
    }catch (error) {
        res.json({error: error.message});
    }finally {
        await client.close();
    }
}

const destroyProduct = async (req, res) => {
    let id = req.params.id;
    let idData = {_id: new ObjectId(id)};

    try {
        await client.connect();
        const database = client.db('tienda');
        const collection = database.collection('productos');
        const result = await collection.deleteOne(idData);
        
        if (result.deletedCount === 1) {
            res.render('delete', {success: true, error: false});
        } else {
            res.render('delete', {success: false, error: true});
        }
    }catch (error) {
        res.json({error: error.message});
    }finally {
        await client.close();
    }

};

const getProductById = (req, res) => {};

const getProductsByCategory = (req, res) => {};

const getProductsByPrice = (req, res) => {};

module.exports = {
    addProducts,
    listProducts,
    getProduct,
    updateProducts,
    deleteProduct,
    destroyProduct,
    getProductById,
    getProductsByCategory,
    getProductsByPrice
};

