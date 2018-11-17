const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const userSchema = Schema({
  _id: mongoose.Types.ObjectId,
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  totalIncome: {
    type: Number
  },
  income: [
    {
      name: String,
      required: true
    },
    {
      frequency: String,
      required: true
    },
    {
      nextPayment: Date,
      required: true
    },
    {
      amountPerPay: Number,
      required: true
    },
    {
      category: String,
      required: true
    }
  ],
  expense: [
    {
      name: String,
      required: true
    },
    {
      frequency: String,
      required: true
    },
    {
      nextPayment: Date,
      required: true
    },
    {
      amountPerPay: Number,
      required: true
    },
    {
      category: String,
      required: true
    }
  ],
  dreams: [
    {
      name: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    totalIncome: {
      type: Number,
      required: true
    }
  ]
});

module.exports = mongoose.model('');
