const bycryp= require('bcryptjs');
const path= require('path');
const dotenv= require('dotenv');
dotenv.config({path:'./env/.env'});
const connection = require(path.join(__dirname,'../../db/db'));
var jwt= require('jsonwebtoken');
const accesstoken= process.env.ACCESSTOKEN;
const accesstokenad=process.env.ACCESSTOKENAD;

module.exports = async( {body}, res ) => {
    const user= body.user;
    const pass= body.pass;
    let passencr= await bycryp.hash(pass,8);
    if(user && pass){
        connection.query('SELECT* FROM trabajador WHERE usuario = ?',[user],async (error,results,fields)=>{
            if( results.length == 0 || !(await bycryp.compare(pass,results[0].contraseña)) ){
                //error de contraseña o usuario
                return res.status(401).send("1");
            }else{
                //ok
                if(results[0].id_cargo == 1001){
                    const access= jwt.sign({nombre:results[0].nombre,apellido:results[0].apellido,cedula:results[0].codigo,rol:"1001"},accesstokenad)
                    return res.status(200).send({"res":"2", "op":"0",token:access})

                }else if(results[0].id_cargo == 1002){
                    const access= jwt.sign({nombre:results[0].nombre,apellido:results[0].apellido,cedula:results[0].codigo,rol:"1002"},accesstoken)
                    return res.status(200).send({"res":"2", "op":"1",token:access});
                }
            }
        })
    }else{
        //campos vacios
         return res.status(403).send("3")
    }

};

