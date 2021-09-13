const express = require("express");
const bycryp= require('bcryptjs');
const router = express.Router();
const path= require('path');
const dotenv= require('dotenv');
dotenv.config({path:'./env/.env'});
const connection = require(path.join(__dirname,'../db/db'));
router.post('/logWorker',async(req,res)=>{
    //let passe= await bycryp.hash("12345",8);
    //connection.query('insert into trabajador set ?',{codigo:"1007382624",id_cargo:"1002",id_taller:"123456789",cedula:"1007382624",nombre:"Carlos Alberto",apellido:"Salamanca Sanchez",usuario:"Cass",contraseña:passe,direccion:"Sogamoso",celular:"3219581504"})
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
                res.send("2");
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
            if(results.length == 0 || results[0].id_cliente == cedula){
                //error de cedula o placa
                res.send("1");
            }else{
                //Entro
                res.send("2");
            }
        })
    }else{
        //Campos vacios
    }
});


module.exports = router
