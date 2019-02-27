const  express = require('express');
const  postCtrl = require('../controllers/post.controller');
var postCtrl_ = new postCtrl();
const router = express.Router();
router.route('/')
    .get(postCtrl_.list);
router.route('/save').post(postCtrl_.save);
module.exports = router;
