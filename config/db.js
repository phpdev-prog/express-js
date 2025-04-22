const mongoose = require('mongoose')
const colors = require('colors')

// function to connect to database

const connectDb= async() =>{
    try {
        const conn = await mongoose.connect('mongodb+srv://manindersolitaire:mynameismanindersingh@cluster0.kkpgvue.mongodb.net/expressjs4to6')
        console.log(`Connected to MongoDB Database ${conn.connection.host}`.bgGreen.white)
    } catch (error) {
        console.log(`Error in DB connection ${error}`.bgRed.white)
        process.exit(1)
    }
} 

module.exports = connectDb

