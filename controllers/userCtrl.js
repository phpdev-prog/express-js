const userModel =  require('../models/userModel')

const getUser = (req,res)=>{
    res.send("<h1>Hello from express server chal raha hai....</h1>")
}

const createUser = (req,res)=>{

        const {data} = req.body
        res.json({
            success: true,
            message: `Welcome ${data}`,
        })
}


const newUser = async(req,res) => {
       try {
         const {name, email, password} = req.body
         const user =  await userModel.create({
            name,
            email,
            password
         })
         res.status(201).json({
            success: true,
            user
         })
       } catch (error) {
          console.log(error)
       }
}

module.exports = {getUser, createUser , newUser}