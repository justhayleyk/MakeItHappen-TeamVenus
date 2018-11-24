import React, { Component } from 'react';
import API from '../../utils/API';
//import StrategyPicker from '../pages/Strategy';
import BudgetTable from '../components/Table/BudgetTable';
import { Col, Row, Container, Button, Form, Input } from 'reactstrap';

class Calculation extends Component {
  // need to bring in all existing debts from the database and place in an array
  // will hard-code data for MVP purposes

  state = {
    debts: [],
    currentDebt: {
      debtname: '',
      amount: 0,
      interestrate: 0,
      compounding: '',
      minimumpayment: 0,
      alternateamount: 0
    },
    monthsRemaining: 0,
    totalDebt: 0,
    totalMinPay: 0
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  //this.state.debts.push(this.state.currentDebt)

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      //modify according to object notation
      !this.state.currentDebt.debtname ||
      !this.state.currentDebt.amount ||
      !this.state.currentDebt.interestrate ||
      !this.state.currentDebt.compounding ||
      !this.state.currentDebt.minimumpayment ||
      !this.state.currentDebt.alternateamount
    ) {
      alert('Record the details of your debt here');
    } else {
      alert('Thank you');
    }

    API.saveDebt({
      debtname: this.state.debtname,
      amount: this.state.amount,
      interestrate: this.state.interestrate,
      compounding: this.state.compounding,
      minimumpayment: this.state.minimumpayment,
      alternateamount: this.state.alternateamount
    })
      .then(res => {
        this.loadDebts().then(() => {
          console.log(this.state);
        });
      })
      .catch(err => console.log(err));
  };

  handleCalculations = () => {
    let totalMinPay = 0;
    let totalDebt = 0;

    let debtData = [
      {
        debtname: 'Car Loan',
        amount: 12000,
        interestrate: 7.0,
        compounding: 'monthly',
        minimumpayment: 485.0,
        alternateamount: 210
      },
      {
        debtname: 'Mortgage',
        amount: 200000,
        interestrate: 5.0,
        compounding: 'monthly',
        minimumpayment: 584.0,
        alternateamount: 0
      },
      {
        debtname: 'Big screen TV',
        amount: 3000,
        interestrate: 21.99,
        compounding: 'monthly',
        minimumpayment: 249.0,
        alternateamount: 0
      },
      {
        debtname: 'Student Loan',
        amount: 22000,
        interestrate: 5.0,
        compounding: 'monthly',
        minimumpayment: 315.0,
        alternateamount: 0
      },
      {
        debtname: 'Snowmobile Loan',
        amount: 6000,
        interestrate: 8.0,
        compounding: 'monthly',
        minimumpayment: 267.0,
        alternateamount: 0
      }
    ];

    for (let i = 0; i < debtData.length; i++) {
      // get a total of all existing minimum monthly payments
      totalMinPay += debtData[i].mthlypay;

      // get the current amount of all total debt owing
      totalDebt += debtData[i].balance;
    }

    this.setState({
      totalDebt: totalDebt,
      totalMinPay: totalMinPay
    });

    let monthsRemaining =
      totalDebt / (totalMinPay + this.debtData[0].alternateamount);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-6">
            <h1>Add new Debt</h1>
            <Form onSubmit={this.handleFormSubmit}>
              <Input
                value={this.state.currentDebt.debtname}
                onChange={this.handleInputChange}
                name="debtname"
                placeholder="Name of Debt (required)"
              />
              <Input
                value={this.state.currentDebt.amount}
                onChange={this.handleInputChange}
                name="amount"
                placeholder="Original Amount Owing (required)"
              />
              <Input
                value={this.state.currentDebt.interestrate}
                onChange={this.handleInputChange}
                name="interestrate"
                placeholder="Interest Rate (required)"
              />
              <Input
                value={this.state.currentDebt.compounding}
                onChange={this.handleInputChange}
                name="compounding"
                placeholder="Frequency Interest Compounds (required)"
              />
              <Input
                value={this.state.currentDebt.minimumpayment}
                onChange={this.handleInputChange}
                name="minimumpayment"
                placeholder="Minimum Payment Amount (required)"
              />
              <Input
                value={this.state.currentDebt.alternateamount}
                onChange={this.handleInputChange}
                name="alternateamount"
                placeholder="One time additional payment"
              />
              <Button
                disabled={
                  !(
                    this.state.currentDebt.debtname &&
                    this.state.currentDebt.amount &&
                    this.state.currentDebt.interestrate &&
                    this.state.currentDebt.compounding &&
                    this.state.currentDebt.minimumpayment &&
                    this.state.currentDebt.alternateamount
                  )
                }
                onClick={this.handleFormSubmit}
              >
                Submit New Debt
              </Button>
            </Form>
          </Col>
          <Col size="md-6 sm-12">
            <h1>Current Debts on record</h1>
            {/* {this.state.debts.length ? (
              <ListGroup>
                {this.state.debts.map(debt => (
                  <ListGroupItem key={debt._id}>
                    <Link to={'/debts/' + debt._id}>
                      <strong>
                        {debt.debtname} with original amount of {debt.amount} at{' '}
                        {debt.interestrate} % interest, compounding{' '}
                        {debt.compounding} with minimum payment of{' '}
                        {debt.minimumpayment} with a current balance remaining
                        with an additional amount available of {debt.alternateamount}
                      </strong>
                    </Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
            <BudgetTable title="Your DEBT" tableData={this.debtData} />
            {console.log('this is debtData: ' + this.debtData)}
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <h1>How much longer will I be in debt?</h1>
            <Button onClick={this.handleCalculations}>
              Get my debt report
            </Button>
            <h3>
              {' '}
              You will be in debt for {this.state.monthsRemaining} months.
            </h3>
          </Col>
        </Row>
        <Col>
          <form onSubmit={this.handleSubmit}>
            <p className="title">HOW DO YOU WANT TO PAY DOWN YOUR DEBT?</p>

            <h3>
              Method # 1 - Snowball method - start with paying off the smallest
              debt, and once that debt is paid off, add your minimum payment to
              pay off the next smallest debt.
            </h3>
            <h3>
              Method # 2 - Avalanche method - start with paying off the largest
              debt, and once that debt is paid off, add your minimum payment to
              pay off the next largest debt.
            </h3>
            <h3>
              Method # 3 - Highest Interest method - start with paying off the
              debt with the highest interest rate, which saves you long term on
              interest costs. Once that debt is paid off, apply that minimum
              payment to help pay off the debt with the next highest interest
              rate.
            </h3>
            <br />
            <h2>Which method do you want to use to pay off debt?</h2>
            <ul>
              <li>
                <label>
                  <input
                    type="radio"
                    value="Snowball"
                    checked={this.state.strategy === 'Snowball'}
                    onChange={this.handleChange}
                  />
                  Snowball
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    value="Avalanche"
                    checked={this.state.strategy === 'Avalanche'}
                    onChange={this.handleChange}
                  />
                  Avalanche
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    value="Hghest Interest"
                    checked={this.state.strategy === 'Highest_Interest'}
                    onChange={this.handleChange}
                  />
                  Highest Interest
                </label>
              </li>
            </ul>
            <button type="submit" className="submit-button">
              Make your choice
            </button>
          </form>
        </Col>
      </Container>
    );
  }
}

export default Calculation;
