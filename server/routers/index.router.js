const express = require('express');
const users = require('./users.router');
const products = require('./product.router');
const posts = require('./post.router');
const blocks = require('./block.router');
const areas = require('./area.router');
const router = express.Router();
router.get('/health-check', (req, res) =>
        res.send('OK')
);
router.use('/users',users);
router.use('/products',products);
router.use('/posts',posts);
router.use('/blocks',blocks);
router.use('/areas',areas);
module.exports = router;
