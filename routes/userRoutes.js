const express = require('express')
const { getUser, createUser } = require('../controllers/userCtrl')

// router object

const router = express.Router()

// routes
router.get("/", getUser)
router.post("/create", createUser)



// export
module.exports = router