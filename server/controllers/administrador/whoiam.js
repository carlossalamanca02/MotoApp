module.exports = async( {body}, res ) => {
    console.log(body.idadmin)
    console.log("llego")
    res.status(200).send({"cedula":body.idadmin,"nombre":body.nameadmin,"apellido":body.lastadmin})
};