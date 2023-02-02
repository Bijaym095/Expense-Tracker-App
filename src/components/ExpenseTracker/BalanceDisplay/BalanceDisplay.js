import { useState, useContext, useEffect } from "react";
import AmountData from "./AmountData";
import ExpenseTrackerContext from "../../../context/Expensetracker/expenseTrackerContext";

//styles
import "./BalanceDisplay.css";

export default function BalanceDisplay() {
  //usecontext
  const { formData } = useContext(ExpenseTrackerContext);

  //states
  const [incomeTotal, setIncomeTotal] = useState(null);
  const [expenseTotal, setExpenseTotal] = useState(null);

  useEffect(() => {
    //filtering income arrays when formdata is updated
    const incomeArray = formData.filter((item) => item.amount > 0);

    //set income total
    const incomeTotal = incomeArray.reduce(
      (acc, item) => acc + parseInt(item.amount),
      0
    );
    setIncomeTotal(incomeTotal);

    //filtering expense arrays when formdata is updated
    const expenseArray = formData.filter((item) => item.amount < 0);

    //set expense total
    const expenseTotal = expenseArray.reduce(
      (acc, item) => acc + parseInt(item.amount),
      0
    );
    setExpenseTotal(expenseTotal);
  }, [formData]);

  return (
    <div className="expensetracker__display">
      <h3>
        Your Balance
        <span>Rs. {incomeTotal + expenseTotal}</span>
      </h3>
      <AmountData incomeTotal={incomeTotal} expenseTotal={expenseTotal} />
    </div>
  );
}
