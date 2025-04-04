const express = require('express');
const router = express.Router();
const path = require('path');
const UserDatabase = require('../Modules/UserDatabase');
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Views/RegistrationPage.html'))
})
router.post('/',async (req,res)=>{
    const submittedData = req.body;
    console.log(submittedData);
    try{
        await UserDatabase.create({
            UserName: submittedData.UserName,
            UserMail: submittedData.UserMail,
            UserNum: submittedData.UserNum,
            UserPass: submittedData.UserPass
        });
        res.send(`New User Added`);
    }
    catch{
        res.send('User Aldready Added');
    }
})
module.exports = router;