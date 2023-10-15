const mongoose = require('mongoose')

const commandPrefixSchema = mongoose.Schema({
    // Guild id
    _id: {
        type: String,
        required: true
    },
    
    // Prefix
    prefix: {
        type: String,
        required: true
    },

    // Welcome setting
    welcomeSetting: {
        type: String,
        required: true
    },

    // Welcome channel id
    welcomeID: {
        type: String,
        required: true
    },

    // Suggestions setting
    suggestionsSetting: {
        type: String,
        required: true
    },
    
    // Suggestions channel id
    suggestionsID: {
        type: String,
        required: true
    }
})

const model = mongoose.model('prefixSchema', commandPrefixSchema);

module.exports = model;