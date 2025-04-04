const express = require('express');
const router = express.Router();
const path = require('path');
const UserDatabase = require('../Modules/UserDatabase');

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Views/LoginPage.html'))
})
router.post('/',async (req,res)=>{
    const submittedData = req.body;
    const RecEmail = submittedData.UserMail;
    const RecPass = submittedData.UserPass;
    try{
        const data = await UserDatabase.find({UserMail: RecEmail});
        console.log(RecEmail)
        if (data.length==0){
            res.send(`User Data Not Found`)
        }
        else if (data[0].UserPass==RecPass){
            res.send(`User Login Successful`);
        }
        else if (data[0].UserPass!=RecPass){
            res.send(`Wrong Credintials`);
        }
    }
    catch(err){
        // console.log(err);
        res.send(`DataFetch Error at Login Page`);
    }
})
module.exports = router;