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
import BudgetTable from '../compontents/Table/BudgetTable';

// import Jumbotron from '../../components/Jumbotron';
class BudgetSetup extends Component {
  state = [
    {
      Name: '',
      Amount: '',
      Frequency: '',
      Date: ''
    }
  ];

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
      Name: '',
      Amount: '',
      Frequency: '',
      Date: ''
    });
    console.log('Button was clicked');
    console.log(`Type: ${this.state.nameIncExp}`);
    console.log(`Amount: ${this.state.amount}`);
    console.log(`Freq: ${this.state.frequency}`);
    console.log(`Cat: ${this.state.category}`);
    console.log(`Date: ${this.state.date}`);

    if (this.state.category === 'income') {
      console.log(`income pushed`);
      return this.setState.push(this.incomeData);
    } else {
      console.log(`exp pushed`);
      return this.setState.push(this.expData);
    }
  };

  incomeData = [
    {
      id: 1,
      Name: 'Take Home Pay',
      Amount: '$5000',
      Frequency: 'monthly',
      Date: '10-31-18'
    },
    {
      id: 2,
      Name: 'Uber Pay',
      Amount: '150',
      Frequency: 'Wk',
      Date: '11-01-18'
    }
  ];
  expData = [
    {
      id: 1,
      Name: 'Bell Canda',
      Amount: '$250',
      Frequency: 'monthly',
      Date: '10-20-18'
    },
    {
      id: 2,
      Name: 'Rent',
      Amount: '1550',
      Frequency: 'Monthly',
      Date: '11-01-18'
    }
  ];

  render() {
    console.log(this.state.key);
    return (
      <Container>
        <Row>
          <Col xs="6">
            <Form onSubmit={this.handleFormSubmit}>
              <FormGroup>
                <Label for="text">Name of Income Or Expense:</Label>
                <Input
                  value={this.state.nameIncExp}
                  type="text "
                  name="nameIncExp"
                  onChange={this.handleInputChange}
                  id="nameIncExp"
                  placeholder="Gas Bill"
                />
              </FormGroup>
              <FormGroup>
                <Label for="text">Amount:</Label>
                <Input
                  value={this.state.amount}
                  type="text "
                  name="amount"
                  onChange={this.handleInputChange}
                  id="amount"
                  placeholder="250.00"
                />
              </FormGroup>
              <FormGroup>
                <Label for="frequency">Frequency</Label>
                <Input
                  value={this.state.frequency}
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
                  value={this.state.date}
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
            <BudgetTable title="Your Incomes" tableData={this.incomeData} />
            <BudgetTable title="Your Expenses" tableData={this.expData} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BudgetSetup;
