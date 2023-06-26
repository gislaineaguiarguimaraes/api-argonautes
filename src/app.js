const express = require('express')
const app = express()

//modifie les informations en fonction de l'environnement
require('dotenv').config()

app.use(express.json())

//Import Route
const argonauteRoutes = require('./routes/argonaute')

//Middleware CORS dit qui est autorisé à interroger notre API
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader("Cross-Origin-Resource-Policy", "same-site");
    next();
});

// Load the route
app.use('/api/argonaute', argonauteRoutes)

module.exports = app