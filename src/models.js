const mongoose = require('mongoose');

// this is our schema to represent a mood entry
const moodEntrySchema = mongoose.Schema({
  date: Date,
  mood: {type: Number, required: true},
  sleep: {
    //does date still count for time?
    night: Date,
    morning: Date
  },
  activityLevel: String,
  // activities will be an array of string values
  activities: [String],
  // coord will be an array of string values
  food: [String],
  drinks: String,
  work: String,
  notes: String
});

//**
// VIRTUALS
//**

//sleep
moodEntrySchema.virtual('hours').get(function() {
  //need a virtual to calculate the amount of hours you got to sleep
});
