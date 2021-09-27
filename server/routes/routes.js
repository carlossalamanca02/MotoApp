const express = require("express");
const bycryp= require('bcryptjs');
const router = express.Router();
const path= require('path');
const dotenv= require('dotenv');
dotenv.config({path:'./env/.env'});
const connection = require(path.join(__dirname,'../db/db'));
const multer=require('multer')
const mimetypes = require('mime-types')

const storage=  multer.diskStorage({
    destination: 'MediaFiles',
    filename: function(req,file,cb){
        var name=Date.now()+"."+mimetypes.extension(file.mimetype)
        cb("",name);
        var placa = "IQP55F"
        var descripcion=req.body.description
        var estado=req.body.estado
        var idRegi = 'select idReg from reg_servicio where id_moto = "'+placa+'" and finalizado = 0'
        connection.query(idRegi,(error,results)=>{
            connection.query('insert into estado set?',{id_servicio:results[0].idReg,descripcion:descripcion,nombre_multimedia:name,estado:estado})
            if(error){
                console.log(error)
            }
        })

    }
})
const upload = multer({
    storage: storage
})
router.post('/logWorker',async(req,res)=>{
    //let passe= await bycryp.hash("12345",8);
    //connection.query('insert into trabajador set ?',{codigo:"1007196929",id_cargo:"1001",id_taller:"123456789",cedula:"1007196929",nombre:"Erika Valentina",apellido:"Tinjaca Cely",usuario:"evtc",contraseña:passe,direccion:"Sogamoso",celular:"3132444663"})
    const user= req.body.user;
    const pass= req.body.pass;
    let passencr= await bycryp.hash(pass,8);
    if(user && pass){
        connection.query('SELECT* FROM trabajador WHERE usuario = ?',[user],async (error,results,fields)=>{
            if( results.length == 0 || !(await bycryp.compare(pass,results[0].contraseña)) ){
                //error de contraseña o usuario
                res.send("1");
            }else{
                //ok
                if(results[0].id_cargo == 1001){
                    res.send({"res":"2", "op":"0"});
                }else if(results[0].id_cargo == 1002){
                    res.send({"res":"2", "op":"1"});
                }
            }
        })
    }else{
        //campos vacios
        res.send("3")
    }
});
router.post('/logCustomer', (req,res)=>{
    const placa= req.body.placa;
    const cedula= req.body.cedula;
    if(placa && cedula){
        connection.query('SELECT* FROM moto WHERE placa = ?',[placa],  (error, results)=>{
            if(results.length == 0 || results[0].id_cliente != cedula){
                //error de cedula o placa
                res.send("1");
            }else{
                //Entro
                res.send("2");
            }
        })
    }else{
        //Campos vacios
        res.send("3");
    }
});
router.post('/serchclient',(req,res)=>{
    const placa=req.body.placa;
    if(placa){
        connection.query('SELECT* FROM moto WHERE placa = ?',[placa],  (error, results)=>{
            console.log(results[0])
            if(results[0]){
                aux =results[0]
                aux2=null
                connection.query('SELECT* FROM cliente WHERE cedula = ?',[results[0].id_cliente],  (error, results)=>{
                    console.log(results[0])
                    res.send({"moto":aux,"cliente":results[0]})
                })
            }else{
                res.send({moto:null})
            }
        })
    }else {
        res.send({moto:null})
    }
})
router.post('/addservice',(req,res)=>{
    const placa= req.body.placa;
    const modelo= req.body.modelo;
    const marca = req.body.marca;
    const linea= req.body.linea;
    const cedula= req.body.cedula;
    const nombre= req.body.nombre;
    const apellido= req.body.apellido;
    const direccion= req.body.direccion;
    const celular= req.body.celular;
    const correo= req.body.correo;
    const servicio= req.body.servicio;
    const fecha= req.body.fecha;
    const descripcion= req.body.descripcion
    if (placa && modelo && marca && linea && cedula && nombre && apellido && direccion
        && celular && correo && servicio && fecha && descripcion){
        connection.query('select* from cliente where cedula=?',[cedula],(error,results)=>{
            if(!results[0]){
                connection.query('insert into cliente set?',{cedula:cedula,nombre:nombre,apellido:apellido,dirrecion:direccion,celular:celular,correo:correo})
            }
        })   
        connection.query('select* from moto where placa=?',[placa],(error,results)=>{
            if(!results[0]){
                connection.query('insert into moto set?',{placa:placa,nombre:modelo,id_cliente:cedula,linea:linea,marca:marca})
            }
        })
        connection.query('select* from reg_servicio where id_moto=?',[placa],(error,results)=>{
            if(results[0]){
                var aux=false
                for(x of results){
                    if(x.finalizado == 0){
                        aux= true;
                    }
                }
                if (aux == false){
                    connection.query('insert into reg_servicio set?',{id_moto:placa,id_trabajador:"1007382624",id_tiposervicio:servicio,descripcion:descripcion,fechaingreso:fecha,finalizado:false})
                    res.send({"res":"Creado el servicio"})
                }else{
                    res.send({"res":"El vehiculo tiene servicios activos"})
                }
            }else{
                connection.query('insert into reg_servicio set?',{id_moto:placa,id_trabajador:"1007382624",id_tiposervicio:servicio,descripcion:descripcion,fechaingreso:fecha,finalizado:false})
                res.send({"res":"Creado primer servicio"})
            }
        })
    }else{
        res.send({"res":"Campos insuficientes"})
    }
})
router.post('/sendfile',upload.any('files'),(req,res)=>{
    var placa="IQP55F"
    //var placa=req.body.placa
    var descripcion=req.body.description
    var estado=req.body.estado
    var files= req.files
    if (files.length == 0){
        var idRegi = 'select idReg from reg_servicio where id_moto = "'+placa+'" and finalizado = 0'
        connection.query(idRegi,(error,results)=>{
            connection.query('insert into estado set?',{id_servicio:results[0].idReg,descripcion:descripcion,estado:estado},(error)=>{
                if (error){
                    res.send({"res":1,"msg":"Se presento un error con la base de datos"})
                }else{
                    res.send({"res":2,"msg":"actualiazcion exitosa"})
                }
            })
        })
    }else{
        res.send({"res":3,"msg":"Archivos subidos al servidor"})
    }    
})


module.exports = router
