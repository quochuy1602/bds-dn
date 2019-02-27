const  express = require('express');
const  productCtrl = require('../controllers/products.controller');
var productCtrl_ = new productCtrl();
const router = express.Router();
router.route('/')
    .get(productCtrl_.list);
router.route('/save').post(productCtrl_.save);
router.route('/:id').get(productCtrl_.get);
router.route('/getLocation').post(productCtrl_.findGeoLocation);
module.exports = router;
