var express = require('express');
var router = express.Router();

var adminTrainingDetails=require("../model/controller/TrainingDetails_controller")
var getTrainingDetails=require("../model/controller/getTrainingDetails")
var editdetails=require("../model/controller/editTraining")

router.get("/",getTrainingDetails.getTrianing_details);
router.post("/TrainingDetailsAdmin",adminTrainingDetails.Traning_details);
router.patch("/EditTrainingDetailsAdmin/:id",editdetails.edittraining);

module.exports = router;

