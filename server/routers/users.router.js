const  express = require('express');
const  usersCtrl = require('../controllers/users.controller');
var usersCtrl_ = new usersCtrl();
const router = express.Router();
router.route('/register').post(usersCtrl_.register);
router.route('/login').post(usersCtrl_.login);

module.exports = router;