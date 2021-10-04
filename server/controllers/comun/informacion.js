const path= require('path');
const dotenv= require('dotenv');
dotenv.config({path:'./env/.env'});
const connection = require(path.join(__dirname,'../../db/db'));
module.exports = async( {body}, res ) => {
    var id = body.id
    var rol = body.rol
    if (rol  == 1001){
        var sql = 'select id_moto, descripcion  from reg_servicio where finalizado = 0'
        connection.query(sql,(err,results)=>{
            if(err){
                res.status(404).send({"msg":"Se presento un error en la base de datos"})
            }
            res.status(200).send(results)
        })
    }else{
        var sql = 'select id_moto, descripcion  from reg_servicio where id_trabajador ="'+id+'" and finalizado = 0'
        connection.query(sql,(err,results)=>{
            if(err){
                res.status(404).send({"msg":"Se presento un error en la base de datos"})
            }
            res.status(200).send(results)
        })
    }
};