const express = require("express");
const bycryp= require('bcryptjs');
const router = express.Router();
const path= require('path');
const dotenv= require('dotenv');
dotenv.config({path:'./env/.env'});
const routeradmin= require('../controllers/admin')
const validatetokens = require('../validatetokens/validate')
router.post('/whoiamadmin',[validatetokens.validatead],routeradmin.whoiam);
module.exports = router