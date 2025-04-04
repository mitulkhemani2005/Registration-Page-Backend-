//Required Files
const express = require('express');
const app = express();
const UserDatabase = require('./Modules/UserDatabase');
const RegistrationRoute = require('./Routes/Registration');
const LoginRoute = require('./Routes/Login');
//MiddleWare Imported
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//Database
UserDatabase;
//Routes
app.use('/register',RegistrationRoute); //User Data: GET TO REGISETER AND POST
app.use('/login',LoginRoute);
//server live
app.listen(5000,()=>{console.log(`Registration Page is Live`)});