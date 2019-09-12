const express = require('express')
const app = express()
var http = require('http').Server(app)

app.use("/static", express.static(__dirname + '/static'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html')
})

app.get('/hello', (req, res) => {
    res.sendFile(__dirname + '/static/hello.html')
})


// Set Port
app.set('port', (process.env.PORT || 3000))

app.listen(app.get('port'), () => {
	console.log('Server started on port ' + app.get('port'))
})

