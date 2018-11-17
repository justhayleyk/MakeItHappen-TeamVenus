const mongoose
= require
('mongoose');
const Schema = mongoose.Schema;

// this will be our data base's data structure
const DataSchema = new Schema(
  {
    _id: Number
  },
  user: "userName",
    password: "userPassword",
    email: "userEmail@gmail.com",
    totalIncome: "income",
    budget: [
        {
            name: "fullTimeJob",
            frequency: "biweekly",
            nextPayment: "2018-11-24",
            amountPerPay: "300",
            category: "income"
        },
        {
            name: "partTimeJob",
            frequency: "static",
            nextPayment: "2018-12-02",
            amountPerPay: "400",
            category: "income"
        }
    ],
    debts: [
        {
            debtName: "Visa",
            frequency: "monthly",
            nextPaymentDue: "2018-12-02",
            balanceOutstanding: "100",
            interestRate: "0.2099",
            minimumPayment: "10",
            compounding: "2018-11-24",
            projectedFinalPayment: "2018-12-24",
            typeOfDebt: "creditcard"
        },
        {
            debtName: "Visa",
            frequency: "monthly",
            nextPaymentDue: "2018-12-04",
            balanceOutstanding: "100",
            interestRate: "0.2099",
            minimumPayment: "10",
            compounding: "2018-12-02",
            projectedFinalPayment: "2018-12-24",
            typeOfDebt: "creditcard"
        }
    ],
    dreams": [
        {
            name: "Cuba",
            estimatedAmount: "1000",
            targetDate: "2019-04-04",
            minMonthlySavings": "12"
        },
        {
            name: "Europe",
            estimatedAmount: "800",
            targetDate: "2019-01-01",
            minMonthlySavings: "20"
        }
    ]
}
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model('Data', DataSchema);
