const mongoose = require('mongoose');

let Schema = mongoose.Schema;

//Create Schema
const budgetSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  frequency: {
    type: String,
    required: true
  },
  nextPayment: {
    type: Date,
    required: true
  },
  totalIncome: {
    type: Number,
    required: true
  }
});
