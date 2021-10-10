const express = require("express");
const bycryp= require('bcryptjs');
const router = express.Router();
const path= require('path');
const dotenv= require('dotenv');
dotenv.config({path:'./env/.env'});
const routerclientes= require('../controllers/clientes');
const validatetokens = require('../validatetokens/validate')
router.post('/logCustomer',routerclientes.login);
router.post('/whoiamcliente',[validatetokens.validatecli],routerclientes.whoiam);
router.get('/infoserviceclient',[validatetokens.validatecli],routerclientes.infoserviceclient);
router.get('/estateservice',[validatetokens.validatecli],routerclientes.stateservice)
module.exports = router

