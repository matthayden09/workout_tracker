const router = require('express').Router();
const db = require('../models');

// GET last workout
router.get('/api/workouts', (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        }
    ])
});

// GET workouuts in range
router.get('/api/workouts/range', (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        }
    ])
        .limit(7)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
});

// PUT add exercise
router.put('/api/workouts/:id', (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id,
        { $push: { exercises: req.body } },
        { new: true })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })

});

// POST create workout
router.post('/api/workouts', (req, res) => {
    db.Workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;