const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter your exercise type"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter your exercise name"
            },
            duration: {
                type: Number,
                required: "Enter your exercise time in minutes"
            },
            disttance: {
                type: Number
            },
            reps:{
                type: Number
            },
            sets: {
                type: Number
            },
            weights: {
                type: Number
            }


        }
    ]
});

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0)
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports= Workout;
