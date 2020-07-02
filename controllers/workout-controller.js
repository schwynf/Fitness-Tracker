const router = require("express").Router();
const db = require("../models");


router.get("/api/workouts",async (req, res) => {
    try{
        let workouts = await db.Workout.find({}).sort({ date: -1 });
        res.json(workouts);

    } catch(error){
        console.log(error);
        res.send(error);
        
    }
});

router.post("/api/workouts",async ({ body }, res) => {
  try{
      let newWorkout = await db.Workout.create(body);
      res.json(newWorkout);

  } catch(error){
      console.log(error);
      res.send(error);
  }
});

router.get("/api/workouts/range", async (req, res) => {
  try{
    let dbWorkouts = await db.Workout.find({});
    res.json(dbWorkouts)
    

  } catch(error){
    console.log(error);
    res.send(error);
  }
});

router.put("/api/workouts/:id", async (req, res) => {
  try{
    let dbWorkout = await db.Workout.findByIdAndUpdate(
      req.params.id, {
        $push: { exercises: req.body}
      }
    )
    res.json(dbWorkout)

  } catch(error){
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
