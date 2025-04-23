const express = require('express')
const { getUser, createUser, newUser, getAllUsers, getSingleUser } = require('../controllers/userCtrl')

// router object

const router = express.Router()

// routes
router.get("/", getUser)
router.post("/create", createUser)

// CREATE NEW USER
router.post("/create-user", newUser)

// GET ALL USERS
router.get("/get-users", getAllUsers)

// GET SINGLE USER
router.get("/get-user/:id", getSingleUser)



// export
module.exports = router