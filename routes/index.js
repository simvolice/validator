var express = require('express');
var router = express.Router();
var validator = require('../util/validator');




//Тестируем валидатор
router.post('/valid', function(req, res, next) {



  res.json({"code": validator.testEmail(req.body.email)}); //Пример как вызвать валидатор через АПИ



});

module.exports = router;
