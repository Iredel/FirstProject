const { Schema, model, Types} = require("mongoose")


const schema = new Schema({
    firstName:      {type: String, required: true},
    lastName:       {type: String, required: true},
    phoneNumber:    {type: String, required: true},
    email:          {type: String, required: true},
    
})


module.exports = model('RegisteredUser', schema)