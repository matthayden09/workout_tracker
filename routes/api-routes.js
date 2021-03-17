const router = require('express').Router();
const db = require('../models');

// GET last workout
router.get('/api/workouts', (req, res) => {

});

// GET workouuts in range
router.get('/api/workouts/range', (req, res) => {

});

// PUT add exercise
router.put('/api/wokouts/:id', (req, res) => {
    const id = req.params.id
    db.Workout.findByIdAndUpdate(id, { $push: { exercises: req.body }}, {new: true})
    
    // console.log(req.body)
    // console.log(id)
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
        
        console.log(req.body)
});

module.exports = router;