import React, { Component } from 'react';
import API from '../utils/API';
import {
  Label,
  Card,
  CardBody,
  Input,
  Row,
  Col,
  FormGroup,
  CardTitle,
  Form
} from 'reactstrap';
//import BudgetTable from '../components/Table/BudgetTable';

class Dream extends Component {
  state = {
    dreams: [],
    dreamName: '',
    estimatedAmount: 0,
    targetDate: '',
    priority: ''
  };

  componentDidMount() {
    this.loadDreams();
  }

  loadDreams = () => {
    API.getDreams()
      .then(res =>
        this.setState({
          dreams: res.data,
          dreamName: '',
          estimatedAmount: 0,
          targetDate: '',
          priority: ''
        })
      )
      .catch(err => console.log(err));
  };

  deleteDreams = id => {
    API.deleteDream(id)
      .then(res => this.loadDreams())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveDream({
        dreamName: this.state.dreamName,
        estimatedAmount: this.state.estimatedAmount,
        targetDate: this.state.targetDate,
        priority: this.state.priority
      })
        .then(res => this.loadDreams())
        .catch(err => console.log(err));
    }
  };

  dreamData = [
    {
      id: '1',
      dreamName: 'Dream1',
      estimatedAmont: '2000',
      targetDate: '2019-02-02',
      priority: 'High'
    },
    {
      id: '2',
      dreamName: 'Dream2',
      estimatedAmont: '4000',
      targetDate: '2019-02-02',
      priority: 'High'
    }
  ];

  render() {
    return (
      <div>
        <h1 className="text-center"> Lets Manage Your Dreams </h1>

        <Row>
          <Col sm="6">
            <Card>
              <CardBody>
                <CardTitle>Input New Dream</CardTitle>
                <Form>
                  <FormGroup>
                    <Label for="dreamName">Name</Label>
                    <Input
                      value={this.state.dreamName}
                      type="text"
                      name="dreamName"
                      id="dreamName"
                      placeholder="name"
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="estimatedAmont">Estimated Amount</Label>
                    <Input
                      value={this.state.estimatedAmont}
                      type="integer"
                      name="estimatedAmount"
                      id="estimatedAmount"
                      placeholder="$$"
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="targetDate">Target Date</Label>
                    <Input
                      value={this.state.targetDate}
                      type="date"
                      name="targetDate"
                      id="targetDate"
                      placeholder="DD/MM/YYYY"
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="targetDate">Dream Priority</Label>
                    <Input
                      value={this.state.priority}
                      type="select"
                      name="priority"
                      id="Priority"
                      onChange={this.handleInputChange}
                    >
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </Input>
                  </FormGroup>
                  <button onClick={this.handleFormSubmit}>Submit</button>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardBody />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dream;
