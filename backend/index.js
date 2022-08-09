const express =require('express')
const app = express();
const routesUrls = require('./routes/routers')
const cors = require('cors');

var multer = require('multer');
var upload = multer();
app.use(express.json());
// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(cors());
app.use(express.json())
app.use('/app', routesUrls)
app.listen(4000, ()=> console.log("Hello welcome to server"))
app.get("")