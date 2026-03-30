const express = require('express')
const router = express.Router()


router.get('/', (req, res, next) => {
    res.send("Sending response from Routes folder")
})


router.get('/home', (req, res, next) => {
    res.render('home', null) 
})


router.get('/getResponse', (req, res, next) => {
    const data = {
        'name': 'Vaidarbhi'
    }
    res.json(data)
})

module.exports = router

