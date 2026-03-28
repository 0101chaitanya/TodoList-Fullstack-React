const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})


const TodoModel = mongoose.model("Todo", todoSchema);
module.exports = TodoModel
