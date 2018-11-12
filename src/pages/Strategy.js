import React, { Component } from 'react';

// explain snowball and avalanche, and ask the user which method they want to use.

class StrategyPicker extends Component {
  constructor() {
    super();

    this.state = {
      strategy: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      strategy: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    alert(`You chose the ${this.state.size} strategy to pay down debt.`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p className="title">HOW DO YOU WANT TO PAY DOWN YOUR DEBT?</p>

        <h3>
          Method # 1 - Snowball method - start with paying off the smallest
          debt, and once that debt is paid off, add your minimum payment to pay
          off the next smallest debt.
        </h3>
        <h3>
          Method # 2 - Avalanche method - start with paying off the largest
          debt, and once that debt is paid off, add your minimum payment to pay
          off the next largest debt.
        </h3>
        <h3>
          Method # 3 - Highest Interest method - start with paying off the debt
          with the highest interest rate, which saves you long term on interest
          costs. Once that debt is paid off, apply that minimum payment to help
          pay off the debt with the next highest interest rate.
        </h3>
        <br />
        <h2>Which method do you want to use to pay off debt?</h2>

        <ul>
          <li>
            <label>
              <input
                type="radio"
                value="Snowball"
                checked={this.state.strategy === 'Snowball'}
                onChange={this.handleChange}
              />
              Snowball
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                value="Avalanche"
                checked={this.state.strategy === 'Avalanche'}
                onChange={this.handleChange}
              />
              Avalanche
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                value="Hghest Interest"
                checked={this.state.strategy === 'Highest_Interest'}
                onChange={this.handleChange}
              />
              Highest Interest
            </label>
          </li>
        </ul>

        <button type="submit" className="submit-button">
          Make your choice
        </button>
      </form>
    );
  }
}

React.render(<StrategyPicker />, document.getElementById('app'));

export default StrategyPicker;
