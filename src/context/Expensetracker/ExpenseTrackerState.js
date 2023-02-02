import React, { useEffect, useState } from "react";
import ExpenseTrackerContext from "./expenseTrackerContext";

const ExpenseTrackerState = ({ children }) => {
  const [formData, setFormData] = useState([]);

  //fetching data from local storage
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  //stored data in local storage
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  return (
    <ExpenseTrackerContext.Provider value={{ formData, setFormData }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export default ExpenseTrackerState;
