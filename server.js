const express =  require('express')
const colors =  require('colors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const userRoutes = require('./routes/userRoutes')

// rest object

const app =  express()


// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

app.use('/api/v1/user',userRoutes)


const PORT = 8000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`.bgMagenta.white)
}) 