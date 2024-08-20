const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    tags: Array,
    title: {type: String, required: true},
    category: {type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true},
    trainer: {type: String, required: true},
    status: {type: Boolean, enum: ["Active", "Inactive"], default: "Active"},
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;