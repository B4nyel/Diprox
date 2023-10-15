const mongoose = require('mongoose')

const serversSchema = mongoose.Schema({
    // Unique
    Test: {
        type: String,
        required: true
    },

    // Sponsor
    sName: {
        type: String,
        required: true
    },
    
    // Sponsor invite
    sInvite: {
        type: String,
        required: true
    },

    // Server 1
    name1: {
        type: String,
        required: true
    },

    // Server 1 invite
    name1Inv: {
        type: String,
        required: true
    },

    // Server 2
    name2: {
        type: String,
        required: true
    },

    // Server 2 invite
    name2Inv: {
        type: String,
        required: true
    },

    // Server 3
    name3: {
        type: String,
        required: true
    },

    // Server 3 invite
    name3Inv: {
        type: String,
        required: true
    }
})

const model = mongoose.model('serversSchema', serversSchema);

module.exports = model;