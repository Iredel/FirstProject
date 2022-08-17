const {Schema, model} = require('mongoose')

const schema = new Schema({
    firstName:    {type: String, required: true},
    lastName:    {type: String, required: true},
    age:         {type: String, required: true},
    phoneNumber: {type: String, required: true},
    birthDay:    {type: String, required: true},
    workPlace:   {type: String, required: true},
    owner:       {type: String, required: true}
})

module.exports = model('Doissier', schema)