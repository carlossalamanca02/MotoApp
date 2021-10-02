const tken= require('jsonwebtoken')
const dotenv= require('dotenv');
dotenv.config({path:'./env/.env'});
const accesstokenmec= process.env.ACCESSTOKEN;
const accesstokenad= process.env.ACCESSTOKENAD;
validatemec = (req,res,next)=>{
    let token = req.headers["x-access-token"];
    if (!token){
        return res.status(403).send({"msg":"Se debe estar autenticado para realizar esta accion"})
    }
    tken.verify(token,accesstokenmec,(err,decoded)=>{
        if(err){
            return res.status(401).send({"msg":"No esta autorizado"})
        }
        req.body.idmeca=decoded.cedula
        req.body.namemeca=decoded.nombre
        req.body.lastmeca=decoded.apellido
        next()
    })
}
validatead = (req,res,next)=>{
    let token = req.headers["x-access-token"];
    if (!token){
        return res.status(403).send({"msg":"Se debe estar autenticado para realizar esta accion"})
    }
    tken.verify(token,accesstokenad,(err,decoded)=>{
        if(err){
            return res.status(401).send({"msg":"No esta autorizado"})
        }
        req.body.idadmin=decoded.cedula
        req.body.nameadmin=decoded.nombre
        req.body.lastadmin=decoded.apellido
        next()
    })
}


module.exports = {validatemec,validatead}

