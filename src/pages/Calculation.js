import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';
import { List, ListItem } from '../../components/List';
import StrategyPicker from '../pages/strategy';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Jumbotron,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

// need to bring in all existing debts from the database and place in an array
// will hard-code data for MVP purposes

const currentdebt = [
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

class Calculations extends Component {
  componentDidMount() {
    API.getDebt(this.props.match.params.id)
      .then(res => this.setState({ debt: res.data }))
      .catch(err => console.log(err));
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  // requires calculation of (this month amount) minus (total of minimum pymts) to determine if there is a surplus?
  // requires calculation for each debt to ensure that the amount paid just pays off the debt without paying too much
  // requires calculation for each debt of (current balance ) minus (this month's payment)
  // requires updating the new amount of each balance outstanding
  // which requires an update function/route back to the database.

  render() {
    const { currentdebt } = this.state;
    let totalMinPay = 0;
    let totalDebt = 0;
    currentdebt.forEach(debt => {
      // get a total of all existing minimum monthly payments
      totalMinPay += debt.minimumpayment;
      // get the current amount of all total debt owing
      totalDebt += debt.balance;
    });
    // sort by either amount owing or interest rate to accomodate Snowball, Avalanche or HighInterest
    // have to sort by currentdebt.debt.amount to find the highest amount, the lowest amount, and then sort by currentdebt.debt.interest to find the highest interest rate.

    let maxamount = 0;
    let snowballid = 0;
    for (i = 0; i < currentdebt.length; i++) {
      if (currentdebt.amount[i] > currentdebt.amount[i + 1]) {
        maxamount = currentdebt.amount[i];
        snowballid = currentdebt.id[i];
      } else {
        maxamount = currentdebt.amount[i + 1];
        snowballid = currentdebt.id[i + 1];
      }
    }

    let minamount = 0;
    let avalancheid = 0;
    for (i = 0; i < currentdebt.length; i++) {
      if (currentdebt.amount[i] < currentdebt.amount[i + 1]) {
        minamount = currentdebt.amount[i];
        avalancheid = currentdebt.id[i];
      } else {
        minamount = currentdebt.amount[i + 1];
        avalancheid = currentdebt.id[i + 1];
      }
    }

    let interestamount = 0;
    let interestid = 0;
    for (i = 0; i < currentdebt.length; i++) {
      if (currentdebt.interest[i] > currentdebt.interest[i + 1]) {
        interestamount = currentdebt.amount[i];
        interestid = currentdebt.id[i];
      } else {
        interestamount = currentdebt.amount[i + 1];
        interestid = currentdebt.id[i + 1];
      }
    }

    // know we know the ID number of which debt would be paid off first, in each of the 3 debt reduction methods. We use this information later to apply money from the additional payment to help pay down debt faster.

    if ((this.state.Strategy = 'Snowball')) {
      for (i = 0; i < currentdebt.length; i++) {
        currentdebt.balance[i] =
          currentdebt.balance[i] - currentdebt.mthlypay[i];
        currentdebt.balance[snowballid] = currentdebt.balance - value;
      }
    } else if ((this.state.Strategy = 'Avalanche')) {
      for (i = 0; i < currentdebt.length; i++) {
        currentdebt.balance[i] =
          currentdebt.balance[i] - currentdebt.mthlypay[i];
        currentdebt.balance[avalancheid] = currentdebt.balance - value;
      }
    } else {
      for (i = 0; i < currentdebt.length; i++) {
        currentdebt.balance[i] =
          currentdebt.balance[i] - currentdebt.mthlypay[i];
        currentdebt.balance[interestid] = currentdebt.balance - value;
      }
    }

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Current Debts on record</h1>
            </Jumbotron>
            {this.state.debts.length ? (
              <List>
                {this.state.debts.map(debt => (
                  <ListItem key={debt._id}>
                    <Link to={'/debts/' + debt._id}>
                      <strong>
                        {debt.debtname} with original amount of {debt.amount} at{' '}
                        {debt.interestrate} % interest, compounding{' '}
                        {debt.compounding} with minimum payment of{' '}
                        {debt.minimumpayment} with a current balance remaining
                        of {debt.currentbalance}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
        <Row>
          <Col size="md-6" />
        </Row>
        <Row>
          {/* Ask the user how much they can afford to pay month in total, including some amount over and above the monthly payments*/}
          <h3>
            You have a monthly obligation to pay minimum payments of:
            {totalMinPay}
          </h3>
          <h3>
            Help pay down debt faster by paying more than your monthly minimum
            amounts.
          </h3>
          <h3>
            How much can you afford to pay this month? (Your answer should an
            additional amount OVER & ABOVE the amount you have to pay for the
            monthly minimum payments)
          </h3>
          <form>
            <Input
              value={value}
              onChange={this.handleInputChange}
              name="value"
              placeholder="Amount you can pay (required)"
            />
            <Button
              disabled={!this.state.value}
              onClick={this.handleFormSubmit}
            >
              I can pay this amount.
            </Button>
          </form>
        </Row>
        {let monthsRemain = {totalDebt}/{{ totalMinPay } + { value }}};}
        <Row>
          <h3>
            With those monthly payments, you will be out of debt in
            ${monthsRemain}
            months.
          </h3>
        </Row>
        {/* re-calculation of the debt values for the end of the month*/}
        {/* depends on which debt reduction strategy was chosen by the Debt Strategy selection*/}
        <div>
          <div>
            <h1>End of month Debts</h1>
          </div>
          {this.state.debts.length ? (
            <List>
              {this.state.debts.map(debt => (
                <ListItem key={debt._id}>
                  <Link to={'/debts/' + debt._id}>
                    <strong>
                      {debt.debtname} with original amount of {debt.amount} at{' '}
                      {debt.interestrate} % interest, compounding{' '}
                      {debt.compounding} with minimum payment of{' '}
                      {debt.minimumpayment} with a current balance remaining of{' '}
                      {debt.currentbalance}
                    </strong>
                  </Link>
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div>
      </Container>
    );
  }
}

export default Calculations;
