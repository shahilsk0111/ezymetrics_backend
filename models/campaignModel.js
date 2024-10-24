const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  name: String,
  budget: Number,
  leads: Number
});

module.exports = mongoose.model('Campaign', campaignSchema);
