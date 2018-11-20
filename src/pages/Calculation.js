import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import { Col, Row, Container } from '../../components/Grid';
//import Jumbotron from '../../components/Jumbotron';
//import API from '../../utils/API';
//import { List, ListItem } from '../../components/List';
//import StrategyPicker from '../pages/Strategy';
import BudgetTable from '../compontents/Table/BudgetTable';
import {
  Col,
  Row,
  Container,
  Button,
  Form,
  FormGroup,
  Jumbotron,
  Label,
  Input,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

class Calculation extends Component {
  // need to bring in all existing debts from the database and place in an array
  // will hard-code data for MVP purposes

  state = {
    debts: [],
    currentDebt: {
      debtname: '',
      amount: 0,
      interestrate: 0,
      compounding: '',
      minimumpayment: 0,
      alternateamount: 0
    },
    monthsRemaining: 0,
    totalDebt: 0,
    totalMinPay: 0
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  //this.state.debts.push(this.state.currentDebt)

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      //modify according to object notation
      !this.state.currentDebt.debtname ||
      !this.state.currentDebt.amount ||
      !this.state.currentDebt.interestrate ||
      !this.state.currentDebt.compounding ||
      !this.state.currentDebt.minimumpayment ||
      !this.state.currentDebt.alternateamount
    ) {
      alert('Record the details of your debt here');
    } else {
      alert('Thank you');
    }

    //{
    // API.saveDebt({
    //  debtname: this.state.debtname,
    // amount: this.state.amount,
    //interestrate: this.state.interestrate,
    // compounding: this.state.compounding,
    //  minimumpayment: this.state.minimumpayment,
    //  alternateamount: this.state.alternateamount
    //     })
    //       .then(res => {
    //         this.loadDebts().then(() => {
    //           console.log(this.state);
    //         });
    //       })
    //       .catch(err => console.log(err));
    //   }
    // };
  };

  handleCalculations = () => {
    let totalMinPay = 0;
    let totalDebt = 0;

    let debtData = [
      {
        debtname: 'Car Loan',
        amount: 12000,
        interestrate: 7.0,
        compounding: 'monthly',
        minimumpayment: 485.0,
        alternateamount: 210
      },
      {
        debtname: 'Mortgage',
        amount: 200000,
        interestrate: 5.0,
        compounding: 'monthly',
        minimumpayment: 584.0,
        alternateamount: 0
      },
      {
        debtname: 'Big screen TV',
        amount: 3000,
        interestrate: 21.99,
        compounding: 'monthly',
        minimumpayment: 249.0,
        alternateamount: 0
      },
      {
        debtname: 'Student Loan',
        amount: 22000,
        interestrate: 5.0,
        compounding: 'monthly',
        minimumpayment: 315.0,
        alternateamount: 0
      },
      {
        debtname: 'Snowmobile Loan',
        amount: 6000,
        interestrate: 8.0,
        compounding: 'monthly',
        minimumpayment: 267.0,
        alternateamount: 0
      }
    ];

    for (let i = 0; i < debtData.length; i++) {
      // get a total of all existing minimum monthly payments
      totalMinPay += debtData[i].mthlypay;

      // get the current amount of all total debt owing
      totalDebt += debtData[i].balance;
    }

    this.setState({
      totalDebt: totalDebt,
      totalMinPay: totalMinPay
    });
    // this returns the total amount of debt and the total of minimum payments
    // from this we can calculate length of time until debt retired

    //=========================================================================
    //this won't work for multiple alternate amounts, whether in state or array
    //===========================================================================

    let monthsRemaining =
      totalDebt / (totalMinPay + this.debtData[0].alternateamount);

    // need to call the handleCalculations function in render to print out results

    //need to update the amounts of each debt after the minimum monthly payments

    //  ==================================================================
    //figure out the logic for monthsRemaining and amount (state)
    // ================================================================

    //this.setState({
    //for (let i = 0; i < debtData.length; i++) {
    //amount: this.state.amount[i] - this.state.minimumpayment[i],
    //});
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-6">
            <h1>Add new Debt</h1>
            <Form>
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
                value={this.state.alternateamount}
                onChange={this.handleInputChange}
                name="alternateamount"
                placeholder="One time additional payment"
              />
              <Button
                disabled={
                  !(
                    this.state.debtname &&
                    this.state.amount &&
                    this.state.interestrate &&
                    this.state.compounding &&
                    this.state.minimumpayment &&
                    this.state.alternateamount
                  )
                }
                onClick={this.handleFormSubmit}
              >
                Submit New Debt
              </Button>
            </Form>
          </Col>
          <Col size="md-6 sm-12">
            <h1>Current Debts on record</h1>
            {/* {this.state.debts.length ? (
              <ListGroup>
                {this.state.debts.map(debt => (
                  <ListGroupItem key={debt._id}>
                    <Link to={'/debts/' + debt._id}>
                      <strong>
                        {debt.debtname} with original amount of {debt.amount} at{' '}
                        {debt.interestrate} % interest, compounding{' '}
                        {debt.compounding} with minimum payment of{' '}
                        {debt.minimumpayment} with a current balance remaining
                        with an additional amount available of {debt.alternateamount}
                      </strong>
                    </Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
            <BudgetTable title="Your DEBT" tableData={this.debtData} />
            {console.log('this is debtData: ' + this.debtData)}
          </Col>
        </Row>
        <Row>
          <h1>How much longer will I be in debt?</h1>
          <Button onClick={this.handleCalculations}>Get my debt report</Button>
          <h3> You will be in debt for {this.state.monthsRemaining} months.</h3>
        </Row>
      </Container>
    );
  }
}

export default Calculation;

//         {/* can't create and assign new vars inside render - TODO */}

// I was assigning a new variable to get a onetime payment to help bring down debt
// solution was re-name one of the table names in the minimum JSON to cover off the opportunity of the user //making an alternate payment towards debt.

//======================================================================
// challenge - how to get value from user selection in Strategy to apply to right debt
// =====================================================================

// perhaps for MVP will just let user assign what alternate amount they can apply to whatever debt

//         {/* {let monthsRemaining = {totalDebt} / { {totalMinPay} + {value} }} */}
//         <Row>
//           <h3>
//             With those monthly payments, you will be out of debt in $
//             {totalDebt / (totalMinPay + value)} months.
//           </h3>
//         </Row>
//         {/* re-calculation of the debt values for the end of the month*/}
//         {/* depends on which debt reduction strategy was chosen by the Debt Strategy selection*/}
//         <div>
//           <div>
//             <h1>End of month Debts</h1>
//           </div>
//           {this.state.debts.length ? (
//             <List>
//               {this.state.debts.map(debt => (
//                 <ListItem key={debt._id}>
//                   <Link to={'/debts/' + debt._id}>
//                     <strong>
//                       {debt.debtname} with original amount of {debt.amount} at{' '}
//                       {debt.interestrate} % interest, compounding{' '}
//                       {debt.compounding} with minimum payment of{' '}
//                       {debt.minimumpayment} with a current balance remaining of{' '}
//                       {debt.currentbalance}
//                     </strong>
//                   </Link>
//                 </ListItem>
//               ))}
//             </List>
//           ) : (
//             <h3>No Results to Display</h3>
//           )}
//         </div>
//       </Container>
//     );
//   }
// }

// export default Calculations;

// requires calculation of (this month amount) minus (total of minimum pymts) to determine if there is a surplus?
// requires calculation for each debt to ensure that the amount paid just pays off the debt without paying too much
// requires calculation for each debt of (current balance ) minus (this month's payment)
// requires updating the new amount of each balance outstanding
// which requires an update function/route back to the database.

//
//                  PUT THIS INSIDE A REACT METHOD - TODO
//

// testMethod() {
//   totalMinPay = 0;
//   totalDebt = 0;
//   const debt = currentdebt.map(debt => {
//     // get a total of all existing minimum monthly payments
//     totalMinPay += debt.minimumpayment;
//     // get the current amount of all total debt owing
//     totalDebt += debt.balance;
//   });
//   // sort by either amount owing or interest rate to accomodate Snowball, Avalanche or HighInterest
//   // have to sort by currentdebt.debt.amount to find the highest amount, the lowest amount, and then sort by currentdebt.debt.interest to find the highest interest rate.

//   let snowballid = 0,
//   let minamount = 0,
//   for (i = 0; i < currentdebt.length; i++) {
//     if (currentdebt.amount[i] < currentdebt.amount[i + 1]) {
//       minamount = currentdebt.amount[i];
//       snowballid = currentdebt.id[i];
//     } else {
//       minamount = currentdebt.amount[i + 1];
//       snowballid = currentdebt.id[i + 1];
//     }
//     console.log('minamount = ' + minamount);
//     console.log('snowballid = ' + snowballid);
//     }

//     if (currentdebt.amount[i] > currentdebt.amount[i + 1]) {
//       maxamount = currentdebt.amount[i];
//       avalancheid = currentdebt.id[i];
//     } else {
//       maxamount = currentdebt.amount[i + 1];
//       avalancheid = currentdebt.id[i + 1];
//     }

//     if (currentdebt.interest[i] > currentdebt.interest[i + 1]) {
//       interestamount = currentdebt.amount[i];
//       interestid = currentdebt.id[i];
//     } else {
//       interestamount = currentdebt.amount[i + 1];
//       interestid = currentdebt.id[i + 1];
//     }
//   }

//   // minamount = 0;
//   // avalancheid = 0;
//   // for (i = 0; i < currentdebt.length; i++) {
//   //   if (currentdebt.amount[i] < currentdebt.amount[i + 1]) {
//   //     minamount = currentdebt.amount[i];
//   //     avalancheid = currentdebt.id[i];
//   //   } else {
//   //     minamount = currentdebt.amount[i + 1];
//   //     avalancheid = currentdebt.id[i + 1];
//   //   }
//   // }

//   // let interestamount = 0;
//   // let interestid = 0;
//   // for (i = 0; i < currentdebt.length; i++) {
//   //   if (currentdebt.interest[i] > currentdebt.interest[i + 1]) {
//   //     interestamount = currentdebt.amount[i];
//   //     interestid = currentdebt.id[i];
//   //   } else {
//   //     interestamount = currentdebt.amount[i + 1];
//   //     interestid = currentdebt.id[i + 1];
//   //   }
//   // }

//   // know we know the ID number of which debt would be paid off first, in each of the 3 debt reduction methods. We use this information later to apply money from the additional payment to help pay down debt faster.

//   if ((this.state.Strategy = 'Snowball')) {
//     for (i = 0; i < currentdebt.length; i++) {
//       currentdebt.balance[i] =
//         currentdebt.balance[i] - currentdebt.minimumpayment[i];
//       currentdebt.balance[snowballid] = currentdebt.balance - value;
//     }
//   } else if ((this.state.Strategy = 'Avalanche')) {
//     for (i = 0; i < currentdebt.length; i++) {
//       currentdebt.balance[i] =
//         currentdebt.balance[i] - currentdebt.minimumpayment[i];
//       currentdebt.balance[avalancheid] = currentdebt.balance - value;
//     }
//   } else {
//     for (i = 0; i < currentdebt.length; i++) {
//       currentdebt.balance[i] =
//         currentdebt.balance[i] - currentdebt.mthlypay[i];
//       currentdebt.balance[interestid] = currentdebt.balance - value;
//     }
//   }
// }
