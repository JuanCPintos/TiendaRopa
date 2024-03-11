const express = require('express');
const router = express.Router();
const {check} = require('express-validator');

// const {validateFields} = require('../middlewares/validateFields');
// const {validateFields} = require('../middlewares/validateFields');
// const {validateJWT} = require('../middlewares/validateJWT');
// const {validateRole} = require('../middlewares/validateRole');
// const {admin} = require('../middlewares/admin')

const {
    // metodos de controller de prodcutos
    listProducts,
    addProducts,
} = require('../controllers/productController');

router.get('/', listProducts);

router.post('/', addProducts);

// router.put('/{id}', )

module.exports = router;