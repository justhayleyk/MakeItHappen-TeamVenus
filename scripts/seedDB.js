const mongoose = require('mongoose');
const db = require('../models');

// This file empties the debt collection and inserts the debt below

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/reactdebtlist'
);

const debtSeed = [
  {
    debtname: 'Car Loan',
    balance: 12000,
    interest: 7.0,
    frequency: 'monthly',
    mthlypay: 485.0
  },
  {
    debtname: 'Mortgage',
    balance: 200000,
    interest: 5.0,
    frequency: 'monthly',
    mthlypay: 584.0
  },
  {
    debtname: 'Big screen TV',
    balance: 3000,
    interest: 21.99,
    frequency: 'monthly',
    mthlypay: 249.0
  },
  {
    debtname: 'Student Loan',
    balance: 22000,
    interest: 5.0,
    frequency: 'monthly',
    mthlypay: 315.0
  },
  {
    debtname: 'Snowmobile Loan',
    balance: 6000,
    interest: 8.0,
    frequency: 'monthly',
    mthlypay: 267.0
  }
];

db.Debt.remove({})
  .then(() => {
    console.log('done');
    db.Debt.collection.insertMany(debtSeed);
  })
  .then(data => {
    console.log('records inserted!');
    //what is results? what is 'n'?
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

//figure out where this file is called
