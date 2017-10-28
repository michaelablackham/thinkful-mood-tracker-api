entryconst mongoose = require('mongoose');

// this is our schema to represent a mood entry
const entrySchema = mongoose.Schema({
  date: Date,
  moodRating: {type: Number, required: true},
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

//sleep
entrySchema.virtual('hours').get(function() {
  //need a virtual to calculate the amount of hours of sleep you got
  // (this.sleep.night)-(this.author.lastName);
  // return hours;
});

//return objects wanted from our scheme
entrySchema.methods.apiRepr = function() {

  return {
    id: this._id,
    date: this.date,
    moodRating: this.mood,
    // sleep: this.hours,
    activityLevel: this.activityLevel,
    activities: this.activities
    food: this.food
    drinks: this.drinks
    work: this.work
    notes: this.notes
  };
}

// note that all instance methods and virtual properties on our
// schema must be defined *before* we make the call to `.model`.
const Entry = mongoose.model('entries', EntrySchema);

module.exports = {Entry};
