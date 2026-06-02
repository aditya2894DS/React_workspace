import "../styles/Calendar.css";

function CalendarTopbar() {
  return (
    <div className="calendar-topbar">
      <div className="date-field-container">
        <label>Day:</label>
        <input type="text" placeholder="day" />
      </div>
      <div className="date-field-container">
        <label>Month:</label>
        <input type="text" placeholder="month" />
      </div>
      <div className="date-field-container">
        <label>Year:</label>
        <p style={{ margin: "0 5px" }}> 2026</p>
      </div>
    </div>
  );
}

function CalendarGrid() {
  return <div className="calendar-grid"></div>;
}

export default function Calendar() {
  return (
    <div className="calendar-container">
      <CalendarTopbar />
      <CalendarGrid />
    </div>
  );
}
