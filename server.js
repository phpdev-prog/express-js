const express =  require('express')
const colors =  require('colors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const userRoutes = require('./routes/userRoutes')
const connectDb = require('./config/db')

// rest object

// mongo db connection
connectDb()

const app =  express()
// template engine

// app.set('view engine', 'ejs')

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

app.use('/api/v1/user',userRoutes)

// root

// app.get('/', (req,res)=>{

//     let sitename = "Adidas"
//     let linkTitle =  "About Us"
//     res.render("index" , {sitename : sitename , linkTitle : linkTitle})
// })

// app.get('/blog/:slug', (req,res)=>{
//     let data= req.params.slug
//     res.render('blogpost', {data: data})
// })

const PORT = 8000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`.bgMagenta.white)
}) 