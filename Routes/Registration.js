const express = require('express');
const router = express.Router();
const path = require('path');
const UserDatabase = require('../Modules/UserDatabase');
//Encryption of the password
const bcrypt = require(`bcrypt`);
const saltRound =10;
//Routes
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Views/RegistrationPage.html'))
})
router.post('/',async (req,res)=>{
    const submittedData = req.body;
    // console.log(submittedData);
    const encryptedPassword = bcrypt.hash(submittedData.UserPass,saltRound,async (err,hash)=>{
        try{
            await UserDatabase.create({
                UserName: submittedData.UserName,
                UserMail: submittedData.UserMail,
                UserNum: submittedData.UserNum,
                UserPass: hash
            });
            res.send(`New User Added`);
        }
        catch(err){
            return res.send(err)
            // res.send('User Exists');
        }
    })
    
})
module.exports = router;