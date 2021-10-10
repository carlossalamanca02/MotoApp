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
        console.log(err)
        if(err){
            res.status(404).send({"res":"Se presento un error en la base de datos"})
        }else{
            res.status(200).send({"msg":"El servicio se eliminó con exito"})
        }
        
    })
}