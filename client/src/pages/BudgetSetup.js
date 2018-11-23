import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import BudgetTable from '../components/Table/BudgetTable';

// import Jumbotron from '../../components/Jumbotron';
class BudgetSetup extends Component {
  state = {
    currentBudget: {
      id: 0,
      name: '',
      amount: 0,
      frequency: '',
      date: ''
    },
    category: '',
    incBudget: [],
    expBudget: []
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    console.log(event);

    this.setState({
      currentBudget: {
        id: this.state.currentBudget.id + 1,
        name: '',
        amount: '',
        frequency: '',
        date: ''
      }
    });
    console.log('Button was clicked');
    console.log(`name: ${this.state.currentBudget.name}`);
    console.log(`amount: ${this.state.currentBudget.amount}`);
    console.log(`freq: ${this.state.currentBudget.frequency}`);
    console.log(`date: ${this.state.currentBudget.date}`);
    console.log(`cat: ${this.state.category}`);

    if (this.state.category === 'Income') {
      console.log(`income pushed`);
      this.state.incBudget.push(this.state.currentBudget);
      this.incData.push(this.state.currentBudget);
      console.log(this.state.incBudget);
      console.log(this.incData);
    } else {
      console.log(`exp pushed`);
      this.state.expBudget.push(this.state.currentBudget);
      this.expData.push(this.state.currentBudget);
      console.log(this.state.expBudget);
      console.log(this.expData);
    }
  };

  incData = [
    {
      id: 1,
      name: 'Take Home Pay',
      amount: '$5000',
      frequency: 'monthly',
      date: '10-31-18'
    },
    {
      id: 2,
      name: 'Uber Pay',
      amount: '150',
      frequency: 'Wk',
      date: '11-01-18'
    }
  ];
  expData = [
    {
      id: 1,
      name: 'Bell Canda',
      amount: '$250',
      frequency: 'monthly',
      date: '10-20-18'
    },
    {
      id: 2,
      name: 'Rent',
      amount: '1550',
      frequency: 'Monthly',
      date: '11-01-18'
    }
  ];

  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">
            <Form onSubmit={this.handleFormSubmit}>
              <FormGroup>
                <Label for="text">Name of Income Or Expense:</Label>
                <Input
                  value={this.state.currentBudget.name}
                  type="text"
                  name="nameIncExp"
                  onChange={this.handleInputChange}
                  id="nameIncExp"
                  placeholder="Gas Bill"
                />
              </FormGroup>
              <FormGroup>
                <Label for="text">Amount:</Label>
                <Input
                  value={this.state.currentBudget.amount}
                  type="text"
                  name="amount"
                  onChange={this.handleInputChange}
                  id="amount"
                  placeholder="250.00"
                />
              </FormGroup>

              <FormGroup>
                <Label for="frequency">Frequency</Label>
                <Input
                  value={this.state.currentBudget.frequency}
                  type="select"
                  name="frequency"
                  id="frequency"
                  onChange={this.handleInputChange}
                >
                  <option>Variable</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Bi-Weekly</option>
                  <option>Monthly</option>
                </Input>
              </FormGroup>

              {/* <FormGroup>
                <Label for="frequency">Frequency</Label>
                <Input
                  value={this.state.currentBudget.frequency}
                  type="select"
                  name="frequency"
                  id="frequency"
                  onChange={this.handleInputChange}
                >
                  <option>Variable</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Bi-Weekly</option>
                  <option>Monthly</option>
                </Input>
              </FormGroup> */}
              <FormGroup>
                <Label for="category">Category</Label>
                <Input
                  value={this.state.category}
                  type="select"
                  name="category"
                  id="category"
                  onChange={this.handleInputChange}
                >
                  <option>Income</option>
                  <option>Expense</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleDate">Date</Label>
                <Input
                  value={this.state.currentBudget.date}
                  type="date"
                  name="date"
                  id="exampleDate"
                  placeholder="date placeholder"
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <Button onClick={this.handleFormSubmit}>Add Item</Button>
            </Form>
          </Col>
          <Col xs="6">
            <BudgetTable title="Your Incomes" tableData={this.incData} />
            <BudgetTable title="Your Expenses" tableData={this.expData} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BudgetSetup;
