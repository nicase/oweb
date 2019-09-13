const express = require ('express')
const mongodb = require ('mongodb')

const router = express.Router()

// Crides get

router.get('/', (req, res) => {
    res.send('helloooo')
})

// Crides post


module.exports = router