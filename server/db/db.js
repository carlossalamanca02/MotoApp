const mysql= require('mysql')
const conection =mysql.createConnection({
    host: process.env.DB_HOST,
    user :process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS
});
conection.connect((error)=>{
    if(error){
        console.log('error'+error);
        return;
    }
    console.log('hecho')
});
module.exports = conection;