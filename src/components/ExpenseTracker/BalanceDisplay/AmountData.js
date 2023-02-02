//styles
import "./AmoutData.css";

export default function AmountData({ incomeTotal, expenseTotal }) {
  return (
    <div className="expensetracker__amount-data">
      <div className="income">
        <h4>
          Income
          <span>Rs {incomeTotal}</span>
        </h4>
      </div>
      <div className="expense">
        <h4>
          Expense
          <span>Rs {Math.abs(expenseTotal)}</span>
        </h4>
      </div>
    </div>
  );
}
