import React, { Component } from 'react';
import API from '../..utils/API';
import { Link } from 'react-router-dom';
import { List, ListItem } from '../../components/List';
import { Input, FormBtn } from '../../components/Form';
import Jumbotron from '../../components/Jumbotron';
import { Col, Row, Container } from '../../components/Grid';

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
  componentDidMount() {
    this.loadDebts();
  }

  loadDebts = () => {
    API.getDebt()
      .then(res =>
        this.setState({
          debts: res.data,
          debtname: '',
          amount: '',
          interestrate: '',
          compounding: '',
          minimumpayment: '',
          currentbalance: ''
        })
      )
      .catch(err => console.log(err));

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
          .then(res => this.loadDebts())
          .catch(err => console.log(err));
      }
    };
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add new Debt</h1>
            </Jumbotron>
            <form>
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
                placeholder="Current Balance (required)"
              />
              <FormBtn
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
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
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
      </Container>
    );
  }
}
export default Debts;
