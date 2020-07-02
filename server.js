const express = require("express");
const mongoose = require("mongoose");
const htmlController = require("./controllers/html-controller");
const workoutController = require("./controllers/workout-controller");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workout", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(htmlController);
app.use(workoutController)
app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`);
  });