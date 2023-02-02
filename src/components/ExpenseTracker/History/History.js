import { useContext } from "react";
import { HistoryList } from "./HistoryList";

//context import
import expenseTrackerContext from "../../../context/Expensetracker/expenseTrackerContext";

//styles
import "./History.css";

export default function History() {
  //use context
  const { formData } = useContext(expenseTrackerContext);

  return (
    <div className="expensetracker__history">
      <h3>History</h3>
      {/* conditional rendering of the data lists  */}
      {formData.length === 0 ? (
        <p>No data to show</p>
      ) : (
        <HistoryList lists={formData} />
      )}
    </div>
  );
}
