const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes')

const app = express()

app.set('port', process.env.PORT || 9000)

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'apinode'
}

//MiddleWare
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

//Routes
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})

app.use('/api', routes)

//Server Running
app.listen(app.get('port'), () => {
    console.log('server running on port', app.get('port'))
})


