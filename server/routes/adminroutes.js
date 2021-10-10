const express = require("express");
const bycryp= require('bcryptjs');
const router = express.Router();
const path= require('path');
const dotenv= require('dotenv');
dotenv.config({path:'./env/.env'});
const routeradmin= require('../controllers/admin')
const validatetokens = require('../validatetokens/validate')
router.post('/whoiamadmin',[validatetokens.validatead],routeradmin.whoiam);
router.post('/listallservices',[validatetokens.validatead],routeradmin.listallservices)
router.post('/listallclients',[validatetokens.validatead],routeradmin.listallclients)
router.post('/deleteservices',[validatetokens.validatead],routeradmin.deleteservices)
module.exports = router