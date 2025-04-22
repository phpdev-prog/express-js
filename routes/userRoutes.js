const express = require('express')
const { getUser, createUser, newUser } = require('../controllers/userCtrl')

// router object

const router = express.Router()

// routes
router.get("/", getUser)
router.post("/create", createUser)

// CREATE NEW USER
router.post("/create-user", newUser)

// export
module.exports = router