import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col
} from "reactstrap";
import BudgetTable from "../compontents/Table/BudgetTable";

class Dream extends Component {
  state = {
    dreamName: "",
    estimatedAmont: "",
    targetDate: "",
    priority: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (
      !this.state.dreamName ||
      !this.state.estimatedAmont ||
      !this.state.targetDate ||
      !this.state.priority
    ) {
      alert("Fill in all the data to help us plan achieve your Dreams!");
    } else {
      alert(
        `Name:  ${this.state.dreamName}  Estimated Amount : ${
          this.state.estimatedAmont
        } Target Date : ${this.state.targetDate} Priority : ${
          this.state.priority
        }`
      );
    }

    this.setState({
      dreamName: "",
      estimatedAmont: "",
      targetDate: "",
      priority: ""
    });
  };

  dreamData = [
    {
      id: "1",
      dreamName: "Dream1",
      estimatedAmont: "2000",
      targetDate: "2019-02-02",
      priority: "High"
    },
    {
      id: "2",
      dreamName: "Dream2",
      estimatedAmont: "4000",
      targetDate: "2019-02-02",
      priority: "High"
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
                      type="number"
                      name="estimatedAmont"
                      id="estimatedAmont"
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
              <CardBody>
                <BudgetTable title="Your Dreams" tableData={this.dreamData} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dream;
