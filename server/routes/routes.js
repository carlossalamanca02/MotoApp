const express = require("express");
const bycryp= require('bcryptjs');
const router = express.Router();
const path= require('path');
const dotenv= require('dotenv');
dotenv.config({path:'./env/.env'});
const connection = require(path.join(__dirname,'../db/db'));
const multer=require('multer')
const mimetypes = require('mime-types')
const validatetokens = require('../validatetokens/validate')
const fs = require ('fs')

const storage=  multer.diskStorage({
    destination: 'MediaFiles',
    filename: function(req,file,cb){
        var name=Date.now()+"."+mimetypes.extension(file.mimetype)
        cb("",name);
        var placa = req.body.placa
        var descripcion=req.body.description
        var estado=req.body.estado
        var fecha = new Date();
        var anio = fecha.getFullYear();
        var mes= fecha.getMonth()+1;
        var dia = fecha.getDate();
        var fechain=anio+'-'+mes+'-'+dia
        var idRegi = 'select idReg from reg_servicio where id_moto = "'+placa+'" and finalizado = 0'
        connection.query(idRegi,(error,results)=>{
            if(error){
                console.log("Se presento un error con la base de datos")
            }
            if (estado == 0){
                connection.query('insert into estado set?',{id_servicio:results[0].idReg,descripcion:descripcion,nombre_multimedia:name,estado:"En proceso",fecha_actualizacion:fechain},(error)=>{
                    if (error){
                        console.log("Se presento un error con la base de datos")
                    }
                })
            }else{
                connection.query('insert into estado set?',{id_servicio:results[0].idReg,descripcion:descripcion,nombre_multimedia:name,estado:"Finalizado",fecha_actualizacion:fechain},(error)=>{
                    if (error){
                        console.log("Se presento un error con la base de datos")
                    }else{
                        var update='update reg_servicio set finalizado= 1 where idReg = '+results[0].idReg
                        connection.query(update,(err)=>{
                            if(err){
                                console.log("Se presento un error con la base de datos")
                            }
                        })
                    }
                })
            }


        })
    }

})

const upload = multer({
    storage: storage
})

router.post('/sendfile',[validatetokens.validateadormec],upload.any('files'), async (req,res)=>{
    var placa=req.body.placa    
    var descripcion=req.body.description
    var estado=req.body.estado
    var files= req.files
    var fecha = new Date();
    var anio = fecha.getFullYear();
    var mes= fecha.getMonth()+1;
    var dia = fecha.getDate();
    var fechain=anio+'-'+mes+'-'+dia
    if(files.length>0){
        var idRegi = 'select idReg from reg_servicio where id_moto = "'+placa+'" and finalizado = 0'
        connection.query(idRegi,(error,results)=>{
            if(error){
                res.send({"res":"1","msg":"Se presento un error con la base de datos"})
            }else{
                files.map((x)=>{
                    const nombre_multimedia = fs.readFileSync(path.join(__dirname, '../MediaFiles/'+x.filename))
                    connection.query('insert into estado set?',{nombre_multimedia,descripcion,estado},(error)=>{
                        if (error){
                            res.send({"res":"1","msg":"Se presento un error con la base de datos"})

                        }else{
                            res.send({"res":"3","msg":"Archivos subidos al servidor"})
                        }                      
                    })
                })              
            }
        })
    }else{
        var idRegi = 'select idReg from reg_servicio where id_moto = "'+placa+'" and finalizado = 0'
        connection.query(idRegi,(error,results)=>{
            var auxId= results[0].idReg
            if (error){
                res.send({"res":"1","msg":"Se presento un error con la base de datos"}) 
            }
            if (estado == 0){
                connection.query('insert into estado set?',{id_servicio:auxId,descripcion:descripcion,estado:"En proceso",fecha_actualizacion:fechain},(error)=>{

                    if (error){
                        res.send({"res":"1","msg":"Se presento un error con la base de datos"})
                    }else{
                        res.send({"res":"2","msg":"actualiazcion exitosa"})
                    }
                })
            }else{
                connection.query('insert into estado set?',{id_servicio:auxId,descripcion:descripcion,estado:"Finalizado",fecha_actualizacion:fechain},(error)=>{
                    if (error){
                       res.send({"res":"1","msg":"Se presento un error con la base de datos"})
                    }else{
                        var update='update reg_servicio set finalizado= 1 where idReg = '+auxId
                        connection.query(update,(err)=>{
                            if(err){
                                res.send({"res":"1","msg":"Se presento un error con la base de datos"})
                            }
                        })
                        res.send({"res":"2","msg":"actualiazcion exitosa"})
                    }
                })
            }
        })
    }   
})        
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
router.post('/serchdata',(req,res)=>{
    const placa=req.body.placa;
    if(placa){
        connection.query('SELECT* FROM moto WHERE placa = ?',[placa],  (error, results)=>{
            if (error){
                res.send({moto:null,cliente:null})
            }
            if(results[0]){
                aux =results[0]
                aux2=null
                connection.query('SELECT* FROM cliente WHERE cedula = ?',[results[0].id_cliente],  (error, results)=>{
                    if(error){
                        res.send({moto:null,cliente:null})
                    }
                    res.send({moto:aux,cliente:results[0]})
                })
            }else{
                res.send({moto:null})
            }
        })
        
    }else {
        res.send({moto:null,cliente:null})
    }
})

router.get('/img',(req,res)=>{
    res.sendFile(path.join(__dirname, "../MediaFiles/1633268125873.jpeg"));

})
    
module.exports = router
