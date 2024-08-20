const course = require("../models/course");

const getCourse = async (req, res) => {
    try {
        const courses = await course
        .find()
        .populate("category");
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCourseById = async (req, res) => {
    try {
        const course = await course.findById(req.params.id);
        if (!course) return res.status(404).json({ message: "Course not found" });
        res.json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createCourse = async (req, res) => {
    try {
        const course = new course(req.body);
        const newCourse = await course.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateCourse = async (req, res) => {
    try {
        const updatedCourse = await course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCourse) return res.status(404).json({ message: "Course not found" });
        res.json(updatedCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteCourse = async (req, res) => {
    try {
        const deletedCourse = await course.findByIdAndDelete(req.params.id);
        if (!deletedCourse) return res.status(404).json({ message: "Course not found" });
        res.json({ message: "Course deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getCourse,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};