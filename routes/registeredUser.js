const {Router} = require('express')
const RegisteredUser = require('../models/registeredUser')
const {check, validationResult} = require('express-validator')
const registeredUserRouter =  Router()
const auth1 = require('../middleware/auth_middleware')


registeredUserRouter.post('/userCreate',

    

    [
        check('firstName', 'void field').exists(),
        check('lastName', 'void field').exists(),
        check('phoneNumber', 'void field').exists(),
        check('email', 'void field').exists()
    ],

 async (req, res)=>{
    try {
        const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректный данные при регистрации'
      })
    }
        
        const {
            firstName, 
            lastName,
            phoneNumber,
            email

        } = req.body
        
        const registereduser = new RegisteredUser({
            firstName, 
            lastName,
            phoneNumber,
            email
        })

        await registereduser.save()

        res.status(201).json({massage:"created"})

    } catch (error) {
        res.status(500).json({message:"error RegisteredUser"})
    }
})


module.exports = registeredUserRouter
