const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MongoAtlasURI = process.env.MONGO_ATLAS_URI;

const connection = mongoose.connect(MongoAtlasURI, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database');
    }
});

module.exports = connection;