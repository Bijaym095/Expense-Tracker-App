//UI files
import Addtransaction from "../ExpenseTracker/Addtransaction/Addtransaction";
import BalanceDisplay from "../ExpenseTracker/BalanceDisplay/BalanceDisplay";
import History from "../ExpenseTracker/History/History";

//context
import ExpenseTrackerState from "../../context/Expensetracker/ExpenseTrackerState";

//styles
import "./ExpenseTracker.css";

export default function ExpenseTracker() {
  return (
    <ExpenseTrackerState>
      <div className="expensetracker">
        <h1>Expense Tracker</h1>
        <BalanceDisplay />
        <History />
        <Addtransaction />
      </div>
    </ExpenseTrackerState>
  );
}
