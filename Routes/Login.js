const express = require('express');
const router = express.Router();
const path = require('path');
const UserDatabase = require('../Modules/UserDatabase');
const bcrypt = require(`bcrypt`);

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../Views/LoginPage.html'))
})
router.post('/',async (req,res)=>{
    const submittedData = req.body;
    const RecEmail = submittedData.UserMail;
    const RecPass = submittedData.UserPass;
    if (!RecEmail || !RecPass){return res.status(400).send(`Empty Fields`)};
    try{
        const data = await UserDatabase.findOne({UserMail: RecEmail});
        const CheckPass = await bcrypt.compare(RecPass, data.UserPass);
        if (!data){
            return res.send(`User Data Not Found`);
        }
        else if (CheckPass){
            return res.send(`User Login Successful`);
        }
        else{
            return res.send(`Wrong Credintials`);
        }
    }
    catch(err){
        console.log(err);
        // res.send(`DataFetch Error at Login Page`);
    }
})
module.exports = router;