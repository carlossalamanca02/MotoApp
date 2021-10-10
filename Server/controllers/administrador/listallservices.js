const bycryp= require('bcryptjs');
const path= require('path');
const dotenv= require('dotenv');
dotenv.config({path:'./env/.env'});
const connection = require(path.join(__dirname,'../../db/db'));
var jwt= require('jsonwebtoken');
const accesstoken= process.env.ACCESSTOKEN;
const accesstokenad=process.env.ACCESSTOKENAD;

module.exports = async ( {body}, res ) => {
    var sql1='select s.descripcion,c.nombre,c.apellido,m.placa FROM reg_servicio AS s INNER JOIN moto AS m ON m.placa = s.id_moto INNER JOIN cliente AS c ON m.id_cliente = c.cedula WHERE s.finalizado=0'
    var error=false
    connection.query(sql1,(err,results)=>{
        if(err){
            error=true;
        }
        res.status(200).send({"placas":results})
    })
}