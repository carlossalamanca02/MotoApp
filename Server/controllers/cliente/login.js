const path= require('path');
const connection = require(path.join(__dirname,'../../db/db'));
var jwt= require('jsonwebtoken');
const accesstokencli=process.env.ACCESSTOKENCLI;


module.exports = async( {body}, res ) => {
    const placa= body.placa;
    const cedula= body.cedula;
    if(placa && cedula){
        var sql='SELECT* FROM moto WHERE placa ="'+placa+'"'
        connection.query(sql ,  (error, results)=>{
            if(error){
                res.status(401).send({"op":"3","3":"Error en la base de datos"})
            }
            if(results){

                if(results.length == 0 || results[0].id_cliente != cedula){
    
                    res.status(401).send({"op":"1","1":"Error de credenciales"});
                }else{
                    
                    const access= jwt.sign({placa:results[0].placa,modelo:results[0].nombre,cedula:results[0].id_cliente,linea:results[0].linea,marca:results[0].marca},accesstokencli)
                    res.status(200).send({"op":"2","2":"Proceso exitoso",token:access});
                }
            }
        })
    }else{
        res.status(403).send({"op":"3","3":"Campos vacios"});
    }


};

