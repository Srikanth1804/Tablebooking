let Mongoose = require("mongoose");

let StudentSchema = new Mongoose.Schema({
  StudentName: {
    type: String,
  },
  Age: {
    type: Number,
  },
  Course: {
    type: String,
  },
});

let SDBS = Mongoose.model("Studentdata", StudentSchema);

module.exports = SDBS;
