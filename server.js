//Required Files
const express = require('express');
const app = express();
const UserDatabase = require('./Modules/UserDatabase');
const RegistrationRoute = require('./Routes/Registration');
const LoginRoute = require('./Routes/Login');
const mongo = require('mongoose');
//MiddleWare Imported
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//Database
mongo.connect('mongodb://localhost:27017/Registration-Page') //connection
.then(()=>{console.log(`User Database is Live`)})
.catch((err)=>{console.log(`Error in User Database`)});
// UserDatabase;
//Routes
app.use('/register',RegistrationRoute); //User Data: GET TO REGISETER AND POST
app.use('/login',LoginRoute);
//server live
app.listen(5000,()=>{console.log(`Registration Page is Live`)});