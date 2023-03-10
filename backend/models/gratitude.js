const mongoose = require('mongoose')

const gratSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    name: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Grat', gratSchema)