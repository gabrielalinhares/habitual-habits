const { Workout } = require('../models');

const WorkoutData = [
  {
    exercise_type: 'walking',
    exercise_duration: 23,
    calories_burned: 500,
    calories_consumed: 1000,
    current_weight: 65,
    user_id: 1
  },
  {
    exercise_type: 'running',
    exercise_duration: 25,
    calories_burned: 550,
    calories_consumed: 900,
    current_weight: 75,
    user_id: 2
  },
  {
    exercise_type: 'cycling',
    exercise_duration: 60,
    calories_burned: 1500,
    calories_consumed: 1200,
    current_weight: 80,
    user_id: 2
  },
  {
    exercise_type: 'cardio',
    exercise_duration: 50,
    calories_burned: 700,
    calories_consumed: 1700,
    current_weight: 60,
    user_id: 3
  },
  {
    exercise_type: 'weight-lifting',
    exercise_duration: 80,
    calories_burned: 500,
    calories_consumed: 1000,
    current_weight: 65,
    user_id: 3
  },
  {
    exercise_type: 'sports',
    exercise_duration: 45,
    calories_burned: 300,
    calories_consumed: 700,
    current_weight: 78,
    user_id: 8
  },
  {
    exercise_type: 'swimming',
    exercise_duration: 50,
    calories_burned: 400,
    calories_consumed: 800,
    current_weight: 63,
    user_id: 6
  },
  {
    exercise_type: 'treadmill',
    exercise_duration: 35,
    calories_burned: 800,
    calories_consumed: 250,
    current_weight: 68,
    user_id: 10
  } 
  

];

const seedWorkouts = () => Workout.bulkCreate(WorkoutData);

module.exports = seedWorkouts;