const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const blogRoutes = require('./blog-routes');
const commentRoutes = require('./comment-routes');
const workoutRoutes = require('./workout-routes');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/comments', commentRoutes);
router.use('/workouts',workoutRoutes);

module.exports = router;
