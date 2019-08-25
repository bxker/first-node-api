const express = require('express');
const app = express()

//importing functions
const getAllUsers = require('./getAllUsers')
const getUserById = require('./getUserById')


// get methods
app.get("/api/users", getAllUsers)
app.get("/api/users/:id", getUserById)


//app listening 
app.listen(8008, () => {
    console.log('App running on port: 8008')
})

