import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm"
import { AppProvider } from "./context/AppContext";
import StackedBar from "./components/StackedBar";


const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">My Budget Planner</h1>
        <div class="input-group">
          <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <button type="button" class="btn btn-outline-primary">search</button>
        </div>

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
          <StackedBar />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;