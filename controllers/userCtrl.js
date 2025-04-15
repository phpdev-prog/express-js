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

module.exports = {getUser, createUser}