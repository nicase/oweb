const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

const router = require('./routes/api/router')
app.use('/api', router)


// Handle production
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'))

    // Cualsevol ruta porta al index
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/public/index.html')
    })
}

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Server running in ' + port)
})
