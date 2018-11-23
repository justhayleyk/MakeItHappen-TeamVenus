import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';
import { List, ListItem } from '../../components/List';
import StrategyPicker from '../pages/strategy';

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

  // sort by either amount owing or interest rate
  // ask the user how much in total they want to apply to this month's debt
  // take (total debt amount) divided by (amount user wants can afford this month) to get number of months remaining
  // requires calculation of (this month amount) minus (total of minimum pymts) to determine if there is a surplus?
  // requires calculation for each debt to ensure that the amount paid just pays off the debt without paying too much
  // requires calculation for each debt of (current balance ) minus (this month's payment)
  // requires updating the new amount of each balance outstanding
  // which requires an update function/route back to the database.

  render() {
    const { currentdebt } = this.state;
    const totalMinPay = 0;
    const totalDebt = 0;
    currentdebt.forEach(debt => {
      // get a total of all existing minimum monthly payments
      totalMinPay += debt.minimumpayment;
      // get the current amount of all total debt owing
      totalDebt += debt.balance;
    });

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
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
          <Col size="md-2">
            <Link to="/">← Back to Debts</Link>
          </Col>
        </Row>
        <row>
          <h3> Sum of total minimum payments: {totalMinPay}</h3>
          <h3> Sum of total debt outstanding: {totalDebt}</h3>
        </row>
      </Container>
    );
  }
}

export default Calculations;
