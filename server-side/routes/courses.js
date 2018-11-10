const express   = require('express');
const router    = express.Router();

// import courses controller
const courseController = require('../controllers/courses-controller');


// Get      all courses
router.get('/', courseController.allCourses);
// Get      a course by id
router.get('/:id', courseController.getById);
// Create   a course
router.post('/', courseController.create);
// Update   a course by id
router.put('/:id', courseController.update);
// Delete   a course by id
router.delete('/:id', courseController.destroy);
// Get      catchall error
router.get('*',courseController.catchall);


module.exports = router;