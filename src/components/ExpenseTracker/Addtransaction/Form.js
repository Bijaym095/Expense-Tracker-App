import React, { useContext, useState } from "react";
import ExpenseTrackerContext from "../../../context/Expensetracker/expenseTrackerContext";

//styling
import "./Form.css";

const Form = () => {
  //states
  const [inputData, setInputData] = useState({
    text: "",
    amount: "",
  });

  //context
  const { setFormData } = useContext(ExpenseTrackerContext);

  //onsubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevData) => [...prevData, inputData]);

    //default value after submitting form
    setInputData({ text: "", amount: "" });
  };

  //onchange function
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputData((prevInputInfo) => ({
      ...prevInputInfo,
      [name]: value,
    }));
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="text">Text</label>
        <input
          id="text"
          type="text"
          placeholder="Enter text..."
          onChange={handleChange}
          name="text"
          value={inputData.text}
          required
        />
      </div>

      <div>
        <label htmlFor="amount">
          Amount (negative - expense, positive - income)
        </label>
        <input
          id="amount"
          type="number"
          placeholder="Enter amount..."
          onChange={handleChange}
          name="amount"
          value={inputData.amount}
          required
        />
      </div>

      <button className="transaction-form-btn">Add transaction</button>
    </form>
  );
};

export default Form;
