const {Router} = require('express')
const Doissier = require('../models/doissier')
const router = Router()
const User = require('../models/User')
const auth = require('../middleware/auth_middleware')

router.get('/doissierList', auth, async (req, res)=>{
    try {
        const ID = req.user.userId
        console.log("ID:", ID)
        
        const doissiers = await Doissier.find({owner: ID})
        res.json(doissiers)
    } catch (e) {
        res.status(500).json({message:"find doissier error"})
    }
})

router.delete('/doissierList', auth, async (req, res) =>{
    try {
        const ID = req.user.userId
        const doissierObject = await Doissier.deleteOne({owner: ID})
    } catch (error) {
        res.status(500).json({message: "error delete"})
    }
})

module.exports = router