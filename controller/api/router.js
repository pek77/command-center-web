var express = require('express');
// var expressWs = require('express-ws');
var router = express.Router();
// expressWs(router);

let toGo = require('./features/toGo');


router.post('/findListByRoleId', toGo.findListByRoleId);

router.all('/', toGo.root);


module.exports = router;
