const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dreamSchema = new Schema({
  dreamName: { type: String, required: true },
  estimatedAmount: { type: String, required: true },
  targetDate: { type: Date, default: Date.now },
  priority: String
});

const Dream = mongoose.model('Dream', dreamSchema);

module.exports = Dream;
