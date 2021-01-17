var express = require("express");
var router = express.Router();
const Workout = require("../models/workout.js");

module.exports = function(app) {
    router.use(function timeLog(req, res, next) {
        console.log("Time: ", Date.now());
        next();
    });

    router.get("/api/workouts", (req, res) => {
        Workout.find()
        .then(dbWorkout => {
            res.join(dbWorkout);
        }).catch(err => {
            res.join(err);
        });
    });
    router.post("/api/workouts", (req, res) => {
        Workout.create({}).then(dbWorkout => {
            res.join(dbWorkout);
        })
        .catch(err => {
            res.join(err);
        });
    });
}