const router = require('express').Router();
const sequelize = require('../config/connection');
const { Workout } = require('../models');
const withAuth = require('../utils/auth');

router.get('/edit-workouts/:id', withAuth, (req, res) => {
    Workout.findByPk(req.params.id, {
        attributes: [
            'id',
            'exercise_type',
            'exercise_duration',
            'calories_burned',
            'calories_consumed',
            'current_weight',
            'created_at',
        ]
    }).then(dbWorkoutData => {
        if (dbWorkoutData) {
            const workout = dbWorkoutData.get({ plain: true });

            res.render('edit-workouts', {
                workout,
                loggedIn: true
            });
        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;