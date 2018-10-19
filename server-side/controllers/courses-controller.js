const mongoose = require('mongoose');

const Course = mongoose.model('Course', {
    id: Number,
    coursename: String,
    coursepresenter: String,
    email: String,
    phone: String,
    costprimary: String,
    costsecondary: String,
    costtertiary: String,
    coursewebsite: String,
    coursevendername: String,
    coursesponsername: String,
    courseaddress1: String,
    courseaddress2: String,
    coursecity: String,
    coursestate: String,
    coursezipcode: String
});

//**************************** CREATE newUser ****************/
const create = (req, res) => {

    const newCourse = req.body;

    Course.create(newCourse, function (err, doc) {
        console.log(err);
        console.log(doc);
        console.log("Course Created!!")
        res.json({ message: 'New Course has been Created' });
    })
}
//*****************************************************
//***************** READ ************** User / Get all Users
const allCourses = (req, res) => {
    Course.find({}).exec((err, course) => {
        res.json({ message: "Get all Courses", course: course });
    });
};
//********************************************************/
//******************* READ One User ***************By Object ID
const getById = (req, res) => {
    const id = req.params.id;

    Course.findOne({ _id: id }).exec((err, course) => {
        //res.json({ message: "Users - Get By Id", user});
        if (!course) {
            res.status(404).json({ message: "Could not find a user with that id." });
        } else if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(course);
            console.log("User_id: " + id + " returned");
        }
    });
};
//*********************************************************/
//******************* UPDATE ************************- Update a users record
const update = (req, res) => {
    const course_id = req.params.id;

    Course.findByIdAndUpdate({ _id: course_id }, req.body).exec((err, course) => {
        if (!course) {
            res.status(404).json({ message: "Could not find a user with that id." });
        } else if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(course);
            console.log("updated!!");
        }
    });
};
//*************************************************************/
//******************* DELETE *****************************- Delete a users record
const destroy = (req, res) => {
    const course_id = req.params.id;

    Course.deleteOne({ _id: course_id }).exec((err, course) => {
        if (!course) {
            res.status(404).json({ message: "Could not find a user with that id." });
        } else if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Course Deleted" });
        }
    });
};
//****************************************************************/







module.exports = { create, getById, allCourses, update, destroy };