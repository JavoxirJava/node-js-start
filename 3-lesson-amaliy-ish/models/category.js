const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 100,
    },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;