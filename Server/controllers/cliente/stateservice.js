const path= require('path');
const connection = require(path.join(__dirname,'../../db/db'));
module.exports = async( {body}, res ) => {
    var placa = body.placa
    sql='select * from estado where id_servicio=(select idReg from reg_servicio where id_moto="'+placa+'" ORDER BY idReg DESC LIMIT 1) and fecha_actualizacion=(select fecha_actualizacion from estado where id_servicio=(select idReg from reg_servicio where id_moto="'+placa+'") order by fecha_actualizacion desc limit 1)'
    connection.query(sql,(err,results)=>{
        if(err){
            res.status(200).send({"r":"1","msg":"Error en la base de datos"})
        }
        if(!results.length){
            res.status(200).send({"r":"2","msg":"No hay servicios registrados"})
            
        }else{
            var out=[]
            for (var i=results.length-1 ;i >=0 ; i--){
                out[i]= {"estado":results[i].estado,"fecha_actualizacion":results[i].fecha_actualizacion,"descripcion":results[i].descripcion,"multimedia":results[i].nombre_multimedia}
            }
            res.status(200).send({"r":"2","msg":"Proceso exitoso",actualizaciones:out})
        
        }
       
    })
}