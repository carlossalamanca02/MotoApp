module.exports = async( {body}, res ) => {
    res.status(200).send({"cedula":body.idmeca,"nombre":body.namemeca,"apellido":body.lastmeca})
};