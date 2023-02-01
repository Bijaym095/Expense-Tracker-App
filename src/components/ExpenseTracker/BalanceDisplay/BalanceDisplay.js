import AmountData from "./AmountData";
import "./BalanceDisplay.css";

export default function BalanceDisplay() {
  return (
    <div className="expensetracker__display">
      <h3>
        Your Balance
        <span>$260.00</span>
      </h3>
      <AmountData />
    </div>
  );
}
