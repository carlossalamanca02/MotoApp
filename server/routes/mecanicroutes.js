const express = require("express");
const bycryp= require('bcryptjs');
const router = express.Router();
const path= require('path');
const dotenv= require('dotenv');
dotenv.config({path:'./env/.env'});
const routerworkers= require('../controllers/workers')
const validatetokens = require('../validatetokens/validate')

router.post('/logWorker',routerworkers.login);
router.post('/addservice',[validatetokens.validateadormec],routerworkers.addservice);
router.post('/whoiammec',[validatetokens.validatemec],routerworkers.whoiam);
router.post('/activeservices',[validatetokens.validateadormec],routerworkers.infor);
router.post('/listservices',[validatetokens.validatemec],routerworkers.listservices)
router.post('/alldataservice',[validatetokens.validatemec],routerworkers.listclients)

module.exports = router
