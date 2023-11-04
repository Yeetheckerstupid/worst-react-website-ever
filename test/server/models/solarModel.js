//this will not exist once SQL DB is used 100%
const mongoose = require('mongoose');

const solarSchema = new mongoose.Schema({
  Date: {
    type: Date,
  },
  Hour: {
    type: Number,
  },
  Electricity_Generated: {
    type: Number,
  },
  Capacity_Factor: {
    type: Number,
  },
});

const solarData = mongoose.model('SolarData', solarSchema);

module.exports = solarData;
