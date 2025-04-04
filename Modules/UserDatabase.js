const mongo = require('mongoose');
mongo.connect('mongodb://localhost:27017/Registration-Page')
.then(()=>{console.log(`User Database is Live`)})
.catch((err)=>{console.log(`Error in User Database`)});
const userSchema = new mongo.Schema({
    UserName: { type: String, required: true },
    UserMail: { type: String, required: true, unique: true },
    UserNum: { type: String, required: true, unique: true },
    UserPass: { type: String, required: true }
  });
const UserData = mongo.models.users || mongo.model('users', userSchema);
module.exports = UserData;