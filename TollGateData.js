// models/TollGateData.js
const mongoose = require('mongoose');

const TollGateDataSchema = new mongoose.Schema({
  expressway: { type: String, required: true },
  entry: { type: String, required: true },
  exit: { type: String, required: true },
  vehicle: { type: String, required: true },
  vehicleClass: { type: String, required: true },
  price: { type: Number, required: true },
});

const TollGateData = mongoose.model('TollGateData', TollGateDataSchema);

module.exports = TollGateData;
