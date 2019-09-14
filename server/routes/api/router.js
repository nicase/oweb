const express = require ('express')
const mongodb = require ('mongodb')

const router = express.Router()

// Crides get

router.get('/', (req, res) => {
    res.send('helloooo').status(200)
})

// Crides post


module.exports = router