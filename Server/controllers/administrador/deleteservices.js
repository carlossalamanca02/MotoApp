const bycryp= require('bcryptjs');
const path= require('path');
const dotenv= require('dotenv');
dotenv.config({path:'./env/.env'});
const connection = require(path.join(__dirname,'../../db/db'));
var jwt= require('jsonwebtoken');
const accesstoken= process.env.ACCESSTOKEN;
const accesstokenad=process.env.ACCESSTOKENAD;

module.exports = async ( {body}, res ) => {
    var placa=body.placa
    var sql1='delete from reg_servicio where id_moto="'+placa+'"'
    connection.query(sql1,(err,results)=>{
        if(err){
            error=true;
        }
        res.status(200).send({"res":"1","msg":"El servicio se eliminó con exito"})
    })
}