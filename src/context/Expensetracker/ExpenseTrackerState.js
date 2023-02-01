import React, { useState } from "react";
import ExpenseTrackerContext from "./expenseTrackerContext";

const ExpenseTrackerState = ({ children }) => {
  const [formData, setFormData] = useState([]);

  return (
    <ExpenseTrackerContext.Provider value={{ formData, setFormData }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export default ExpenseTrackerState;
