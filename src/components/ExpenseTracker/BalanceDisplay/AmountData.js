import "./AmoutData.css";

export default function AmountData() {
  return (
    <div className="expensetracker__amount-data">
      <div className="income">
        <h4>
          Income
          <span>$500.00</span>
        </h4>
      </div>
      <div className="expense">
        <h4>
          Expense
          <span>$240.00</span>
        </h4>
      </div>
    </div>
  );
}
