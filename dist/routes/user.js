"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

var _LoginRequired = require('../middlewares/LoginRequired'); var _LoginRequired2 = _interopRequireDefault(_LoginRequired);
const router = new _express.Router;

router.get('/', _UserController2.default.index);
router.get('/:id', _UserController2.default.show);

router.post('/', _LoginRequired2.default, _UserController2.default.store);
router.put('/', _LoginRequired2.default, _UserController2.default.update);
router.delete('/', _LoginRequired2.default, _UserController2.default.delete);
exports. default = router;

/**
 * index -> lista todos os usuários GET
 * store/create -> cria um novo usuário POST
 * delete -> apaga um usuário DELETE
 * show -> mostra um usuário GET
 * update -> atualiza um usuário PATCH OU PUT
 */
