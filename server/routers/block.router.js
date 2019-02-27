const  express = require('express');
const  blockCtrl = require('../controllers/block.controller');
var blockCtrl_ = new blockCtrl();
const router = express.Router();
router.route('/')
    .get(blockCtrl_.list);
router.route('/save').post(blockCtrl_.save);
module.exports = router;
