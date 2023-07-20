const mongoose = require("mongoose");

const userCSVSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  favorite_sport: {
    type: String,
  },
});

const UserCSV = mongoose.model("UserCSV", userCSVSchema);

module.exports = UserCSV;
