const express= require('express');
const app= express();
const port=9000;
const path= require('path');
const cors= require('cors')
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors())
app.use(require(path.join(__dirname,'routes/routes')));

app.listen(port,()=> console.log(`server to port ${port}`));