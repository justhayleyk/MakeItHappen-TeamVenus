import React, { Component } from 'react';
import API from '../utils/API';
import { Container, Row, Col, Button, Form, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import BudgetTable from '../components/Table/BudgetTable';

class Debts extends Component {
  state = {
    debts: [],
    debtname: '',
    amount: '',
    interestrate: '',
    compounding: '',
    minimumpayment: '',
    currentbalance: ''
  };
  // componentDidMount() {
  //   this.loadDebts();
  // }

  // loadDebts = () => {
  //   API.getDebt()
  //     .then(res =>
  //       this.setState({
  //         debts: res.data,
  //         debtname: '',
  //         amount: '',
  //         interestrate: '',
  //         compounding: '',
  //         minimumpayment: '',
  //         currentbalance: ''
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.debtname &&
      this.state.amount &&
      this.state.interestrate &&
      this.state.compounding &&
      this.state.minimumpayment &&
      this.state.currentbalance
    ) {
      API.saveDebt({
        debtname: this.state.debtname,
        amount: this.state.amount,
        interestrate: this.state.interestrate,
        compounding: this.state.compounding,
        minimumpayment: this.state.minimumpayment,
        currentbalance: this.state.currentbalance
      })
        .then(res => {
          this.loadDebts().then(() => {
            console.log(this.state);
          });
        })
        .catch(err => console.log(err));
    }
  };

  debtData = [
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

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-6">
            <h1>Add new Debt</h1>
            <Form>
              <Input
                value={this.state.debtname}
                onChange={this.handleInputChange}
                name="debtname"
                placeholder="Name of Debt (required)"
              />
              <Input
                value={this.state.amount}
                onChange={this.handleInputChange}
                name="amount"
                placeholder="Original Amount Owing (required)"
              />
              <Input
                value={this.state.interestrate}
                onChange={this.handleInputChange}
                name="interestrate"
                placeholder="Interest Rate (required)"
              />
              <Input
                value={this.state.compounding}
                onChange={this.handleInputChange}
                name="compounding"
                placeholder="Frequency Interest Compounds (required)"
              />
              <Input
                value={this.state.minimumpayment}
                onChange={this.handleInputChange}
                name="minimumpayment"
                placeholder="Minimum Payment Amount (required)"
              />
              <Input
                value={this.state.currentbalance}
                onChange={this.handleInputChange}
                name="currentbalance"
                placeholder="One-time additional payment"
              />
              <Button
                disabled={
                  !(
                    this.state.debtname &&
                    this.state.amount &&
                    this.state.interestrate &&
                    this.state.compounding &&
                    this.state.minimumpayment &&
                    this.state.currentbalance
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
                        of {debt.currentbalance}
                      </strong>
                    </Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
            <BudgetTable title="Your Dreams" tableData={this.debtData} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Debts;
