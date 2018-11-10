import React from "react";
import { Table } from "reactstrap";
import BugetTableRow from "./BudgetTableRow";

export default class BudgetTable extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <Table>
          <thead>
            <tr>
              {Object.keys(this.props.tableData[0]).map(function(key) {
                return <th>{key}</th>;
              })}
            </tr>
          </thead>
          <BugetTableRow data={this.props.tableData} />
        </Table>
      </div>
    );
  }
}
