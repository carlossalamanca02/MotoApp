const path= require('path');
const dotenv= require('dotenv');
dotenv.config({path:'./env/.env'});
const connection = require(path.join(__dirname,'../../db/db'));
module.exports = async( {body}, res ) => {
    const placa= body.placa;
    const modelo= body.modelo;
    const marca = body.marca;
    const linea= body.linea;
    const cedula= body.cedula;
    const nombre= body.nombre;
    const apellido= body.apellido;
    const direccion= body.direccion;
    const celular= body.celular;
    const correo= body.correo;
    const servicio= body.servicio;
    const fecha= body.fecha;
    const descripcion= body.descripcion
    const idmecanico=body.id
    if (placa && modelo && marca && linea && cedula && nombre && apellido && direccion
        && celular && correo && servicio && fecha && descripcion){
        connection.query('select* from cliente where cedula=?',[cedula],(err,results)=>{
            if(err){
                res.status(404).send({"res":"Se presento un error en la base de datos"})
            }
            if(!results[0]){
                connection.query('insert into cliente set?',{cedula:cedula,nombre:nombre,apellido:apellido,dirrecion:direccion,celular:celular,correo:correo},err=>{
                    if(err){
                        res.status(404).send({"res":"Se presento un error en la base de datos"})
                    }
                })
            }
        })   
        connection.query('select* from moto where placa=?',[placa],(err,results)=>{
            if(err){
                res.status(404).send({"res":"Se presento un error en la base de datos"})
            }
            if(!results[0]){
                connection.query('insert into moto set?',{placa:placa,nombre:modelo,id_cliente:cedula,linea:linea,marca:marca})
            }
        })
        connection.query('select* from reg_servicio where id_moto=?',[placa],(err,results)=>{
            if(err){
                res.status(404).send({"res":"Se presento un error en la base de datos"})
            }
            if(results[0]){
                var aux=false
                for(x of results){
                    if(x.finalizado == 0){
                        aux= true;
                    }
                }
                if (aux == false){
                    connection.query('insert into reg_servicio set?',{id_moto:placa,id_trabajador:idmecanico,id_tiposervicio:servicio,descripcion:descripcion,fechaingreso:fecha,finalizado:false})
                    res.status(200).send({"res":"Creado el servicio"})
                }else{
                    res.status(200).send({"res":"El vehiculo tiene servicios activos"})
                }
            }else{
                connection.query('insert into reg_servicio set?',{id_moto:placa,id_trabajador:idmecanico,id_tiposervicio:servicio,descripcion:descripcion,fechaingreso:fecha,finalizado:false},err=>{
                    if(err){
                        res.status(404).send({"res":"Se presento un error en la base de datos"})
                    }else{
                        res.status(200).send({"res":"Creado primer servicio"})
                    }
                })
               
            }
        })
    }else{
        res.status(200).send({"res":"Campos insuficientes"})
    }
};