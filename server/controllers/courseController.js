const Course = require("../models/courseModel");

const getId = async(req, res) => {
    const {department, number} = req.body;
    try {
        const course = await Course.getId(department, number);
        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const createCourse = async(req, res) => {
    const {department, number, fullName, instructors} = req.body;
    try {
        const newCourse = await Course.createCourse(department, number, fullName, instructors);
        res.status(200).json(newCourse);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {createCourse, getId};