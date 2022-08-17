const {Router} = require('express')
const Doissier = require('../models/doissier')
const {check, validationResult} = require('express-validator')
const doissierRouter =  Router()

doissierRouter.post('/doissierCreate',
    [
        check('firstName', 'void field').exists(),
        check('lastName', 'void field').exists(),
        check('age', 'void field').exists(),
        check('phoneNumber', 'void field').exists(),
        check('birthDay', 'void field').exists(),
        check('workPlace', 'void field').exists(),
        check('owner', 'void field').exists(),
    ] 
 ,
 async (req, res)=>{
    try {
        const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректный данные при регистрации'
      })
    }
        console.log("ban1")
        const {
            firstName, 
            lastName, 
            age, 
            phoneNumber,
            birthDay,
            workPlace,
            owner
        } = req.body
        
        const doissier = new Doissier({
            firstName, 
            lastName, 
            age, 
            phoneNumber,
            birthDay,
            workPlace,
            owner
        })

        await doissier.save()

        res.status(201).json({massage:"created"})

    } catch (error) {
        res.status(500).json({message:"error doissier"})
    }
})

module.exports = doissierRouter