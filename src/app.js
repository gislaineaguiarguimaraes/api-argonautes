const express = require('express')
const app = express()

//modifie les informations en fonction de l'environnement
require('dotenv').config()

//cors dit qui est autorisé à interroger notre API
const cors = require('cors')

app.use(express.json())

//Import Route
const argonauteRoutes = require('./routes/argonaute')

// Load the route
app.use('/api/argonaute', argonauteRoutes)

module.exports = app