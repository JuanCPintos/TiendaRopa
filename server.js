const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

require('./database/connection');

const server = app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});

server.on('error', (err) => {
    console.log(`Server error: ${err.message}`);
});