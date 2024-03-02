const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema(
{
    token:
    {
        type: String,
        required: true
    },

    startupID:
    {
        type: String,
        required: true
    },

    lastUsed: 
    {
        type: Date,
        default: Date.now,
        required: true
    },
});

tokenSchema.index({ token: 1, userID: 1 }, { unique: true })
module.exports = mongoose.model("Token", tokenSchema);