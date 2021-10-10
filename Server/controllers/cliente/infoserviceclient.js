const path= require('path');
const connection = require(path.join(__dirname,'../../db/db'));
module.exports = ( {body}, res ) => {
    var placa=body.placa
    sql='SELECT s.id_tiposervicio,s.descripcion,s.fechaingreso,s.fechaEntrega, t.nombre, t.apellido from reg_servicio s INNER JOIN trabajador t ON s.id_trabajador=t.codigo where s.id_moto="'+placa+'"'
    connection.query(sql,(err,results)=>{
        if(err){
            res.status(500).send({"r":"1","msg":"Error en la base de datos"})
        }
        if(!results.length){
            res.status(200).send({"r":"2","msg":"No hay servicios registrados"})
        }else{
            res.status(200).send({"r":"3","msg":"Proceso exitoso","data":results})
        }
    })
    
}