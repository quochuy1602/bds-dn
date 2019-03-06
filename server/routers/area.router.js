const  express = require('express');
const  areaCtrl = require('../controllers/area.controller');
var areaCtrl_ = new areaCtrl();
const router = express.Router();
router.route('/')
    .get(areaCtrl_.list);
router.route('/getCity/:city')
    .get(areaCtrl_.listCity);
router.route('/getLocation')
    .post(areaCtrl_.findGeoLocation);

router.route('/save').post(areaCtrl_.save);
module.exports = router;
