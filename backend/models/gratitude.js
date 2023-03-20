const mongoose = require('mongoose')

const gratSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
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