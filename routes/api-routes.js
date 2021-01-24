const router = require('express').Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// addExercise PUT /api/workouts/ 

router.put("/api/workouts/:id", ({ params, body }, res) => {
    console.log(body);
    db.Workout.findByIdAndUpdate(
        params.id,
        {
            $push: {
                exercises: body,

            },
        },
        {
            new: true,
            runValidators: true
        }
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// createWorkout POST /api/workouts

router.post("/api/workouts", ({ body }, res) => {
    console.log(body);
    db.Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });

    res.send('Got a POST request')
});

// getWorkoutsInRange() GET /api/workouts/range

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;