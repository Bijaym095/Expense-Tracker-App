//styles
import "./HistoryList.css";

export const HistoryList = ({ lists }) => {
  const overlayStyles = {
    position: "absolute",
    top: "0",
    right: " 0",
    bottom: "0",
    width: "10px",
    height: "100%",
  };

  return (
    <ul className="history-lists">
      {lists.map((list, index) => (
        <li className="history-item" key={index}>
          {list.text}
          <p style={{ color: list.amount > 0 ? "green" : "red" }}>
            {list.amount}
          </p>
          {/* item-overlay */}
          <div
            className="item-overlay"
            style={{
              ...overlayStyles,
              backgroundColor: list.amount > 0 ? "green" : "red",
            }}
          ></div>
          {/* item-overlay */}
        </li>
      ))}
    </ul>
  );
};
