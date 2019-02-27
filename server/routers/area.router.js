const  express = require('express');
const  areaCtrl = require('../controllers/area.controller');
var areaCtrl_ = new areaCtrl();
const router = express.Router();
router.route('/')
    .get(areaCtrl_.list);
router.route('/save').post(areaCtrl_.save);
module.exports = router;
