mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = mongoose.Schema({
    name: {
        type: String
        },
    type: {
        type: String
    },
    permissions: {
        type: Array
    },
}, { timestamps: true });

const Role = mongoose.model('Chat', roleSchema);
module.exports = { Role }
