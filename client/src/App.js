import React, { Component } from "react";
import "./App.css";
import Makeithappennav from "./compontents/navbar/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Budget from "./pages/Budget";
import BudgetSetup from "./pages/BudgetSetup";
import Dream from "./pages/Dream";
import Debt from "./pages/Debt";
import LoginSignup from "./pages/LoginSignup";

class App extends Component {
  state = {
    key: "value"
  };

  render() {
    console.log(this.state.key);
    return (
      <Router>
        <div>
          <Makeithappennav />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/budget" component={Budget} />
            <Route exact path="/budgetsetup" component={BudgetSetup} />
            <Route exact path="/debt" component={Debt} />
            <Route exact path="/dream" component={Dream} />
            <Route exact path="/loginsignup" component={LoginSignup} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
