const { Schema, model } = require('mongoose');

const enemySchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    affiliation: {
        type: String,
        required: true
    },

    weakness: {
        type: [String],
        required: true
    },

    desc: {
        type: String,
        required: true
    }
});

// Create the model that will control this collection
module.exports = model("Enemy", enemySchema);