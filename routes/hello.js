var express = require('express'); // express(서버쉽게)모듈 붙이기
var router = express.Router(); //새 라우터 생성

/* GET hellos listing. */
router.get('/', function(req, res, next) {
  res.send('hello World');
});

module.exports = router;
