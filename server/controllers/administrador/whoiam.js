module.exports = async( {body}, res ) => {
    res.status(200).send({"cedula":body.idadmin,"nombre":body.nameadmin,"apellido":body.lastadmin})
};