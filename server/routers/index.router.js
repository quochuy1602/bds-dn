const express = require('express');
const users = require('./users.router');
const router = express.Router();
router.get('/health-check', (req, res) =>
        res.send('OK')
);
router.use('/users',users);
module.exports = router;