import { useContext } from "react";
import expenseTrackerContext from "../../../context/Expensetracker/expenseTrackerContext";
import "./History.css";

export default function History() {
  //context
  const { formData } = useContext(expenseTrackerContext);

  return (
    <div className="expensetracker__history">
      <h3>History</h3>

      {/* conditional rendering of the data lists  */}
      {formData.length === 0 ? (
        <p>No data to show</p>
      ) : (
        <ul className="history-list">
          {formData.map((list, index) => (
            <li className="history-item" key={index}>
              {list.text}
              <p>Rs.{list.amount}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
