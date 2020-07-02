const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{
        name: {
            type: String,
            required: [true, "workout name is required"]
        },
        type: {
            type: String,
            required:  [true, "workout type is required"]
        },
        weight: {
            type: Number,
            default: 0
        },
        sets: {
            type: Number,
            default:0
        },
        reps: {
            type: Number,
            default:0
        },
        duration: {
            type: Number,
            required: [true, "duration is required"]
        },
        distance: {
            type: Number,
            default:0
        }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout