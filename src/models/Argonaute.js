const mongoose = require('../db/db')

const nomeSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        minLength: 2,
        maxLength: 15,
    },
    quality: {
        type: String,
        require: true,
        minLength: 2,
        maxLength: 15,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

});

 const Nome= mongoose.model('Nome', nomeSchema);
 module.exports = Nome