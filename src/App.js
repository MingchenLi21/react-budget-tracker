import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/expensesList/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm"
import { AppProvider } from "./context/AppContext";
import AnalysisCharts from "./components/analysisCharts/AnalysisCharts";
import Nav_ from "./components/nav/Nav_";
import WelcomeBoard from "./components/WelcomeBoard";

const App = () => {
  return (
    <AppProvider>

      <Nav_ />

      <div className="container">
        <WelcomeBoard />

        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>

        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>

        <h3 className="mt-3">Add Expense</h3>
        <div className="mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
        <div>
          <AnalysisCharts />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;