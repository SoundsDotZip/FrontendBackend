const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection
    ({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'butorok'
    })

    connection.connect()

    connection.query('SELECT * FROM butor', function (err, rows, fields)
    {
        if (err) throw err

        console.log(rows)
        res.send(rows)
    })

    connection.end()
})

app.post('/felvitel_butor', (req, res) => {
    console.log(req.body.bevitel1)
    var mysql = require('mysql')
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'butorok'
    })
    
    connection.connect()
    
    connection.query('INSERT INTO butor VALUES (NULL, "'+req.body.bevitel1+'", '+req.body.bevitel2+', "'+req.body.bevitel3+'", "'+req.body.bevitel4+'", "'+req.body.bevitel5+'");', function (err, rows, fields) {
        if (err) throw err
    })

    connection.end()
})
/*
app.post('/butorfelvitel', (req, res) => {
    var mysql = require('mysql')
    var connection = mysql.createConnection
    ({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'butorok'
    })

    connection.connect()

    connection.query('INSERT INTO butor VALUES (NULL, '+req.body.bevitel1+')', function (err, rows, fields)
    {
        if (err) throw err

        console.log("Szavazatát rögzítettük!")
        res.send("Szavazatát rögzítettük!")
    })

    connection.end()
})*/

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
