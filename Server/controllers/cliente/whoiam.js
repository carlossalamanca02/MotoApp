const path= require('path');
const connection = require(path.join(__dirname,'../../db/db'));
module.exports = async( {body}, res ) => {
    sql='select nombre,apellido from cliente where cedula='+body.cedula
    connection.query(sql,(err,results)=>{
        if(err){
            res.status(500).send({"rs":"Error en la base de datos"})
        }
        res.status(200).send({"placa":body.placa,"nombre":results[0].nombre,"apellido":results[0].apellido})
    })
    
    
}