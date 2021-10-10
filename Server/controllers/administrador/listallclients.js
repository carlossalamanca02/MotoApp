const bycryp= require('bcryptjs');
const path= require('path');
const dotenv= require('dotenv');
dotenv.config({path:'./env/.env'});
const connection = require(path.join(__dirname,'../../db/db'));
var jwt= require('jsonwebtoken');
const accesstoken= process.env.ACCESSTOKEN;
const accesstokenad=process.env.ACCESSTOKENAD;



module.exports = async( {body}, res ) => {
    var placa= body.placa
    var descripcion=body.descripcion
    var nombre= body.nombre
    var apellido= body.apellido
    var sql='select s.fechaingreso, s.Id_trabajador, e.fecha_actualizacion, e.estado from reg_servicio s INNER JOIN estado e on s.idReg=e.id_servicio where s.id_moto="'+placa+'"'
    connection.query(sql,(err,results)=>{
        if(err){
            res.status(404).send("Error en la base de datos")
        }
        if(results[0]){
            res.status(200).send({info:results[0],lis:body})
        }else{
            var dataaux={fechaingreso:"No definido",estado:"En proceso", fecha_actualizacion:"Aun no se han registrado actualizaciones"}
            res.status(200).send({info:dataaux,lis:body})
        }
        
    })

}