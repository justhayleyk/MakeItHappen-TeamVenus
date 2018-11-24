import React from 'react';

export default class BudgetTableRow extends React.Component {
  render() {
    // console.log(this.props.data);
    // const { tData } = this.props.data;
    return (
      <tbody>
        {this.props.data.map(rData => (
          <tr>
            {Object.keys(rData).map(function(key) {
              if (key === 'id') {
                return <th>{rData[key]}</th>;
              } else {
                return <td>{rData[key]}</td>;
              }
            })}
          </tr>
        ))}
      </tbody>
    );
  }
}
