import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import BudgetTable from "../compontents/Table/BudgetTable";

class Budget extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">
            <h3>Some Data will Load</h3>
            {/* <BudgetTable title="Incomes" tableData={this.incomeData} />
            <BudgetTable title="Expenses" tableData={this.expData} /> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Budget;
