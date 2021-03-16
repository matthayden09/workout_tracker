const router = require('express').Router();
const Workout = require('../models/Workout.js');

// GET last workout
router.get('/api/workouts', (req, res) => {

});

// GET workouuts in range
router.get('/api/workouts/range', (req, res) => {

});

// PUT add exercise
router.put('/api/wokouts/:id', (req, res) => {

});

// POST create workout
router.post('/api/workouts', ({ body }, res) => {

});

module.exports = router;