import { createContext, useContext, useState, useEffect } from "react";
import "../styles/Calendar.css";

interface SelectedDate {
  month: string;
  dayNo: number;
}

interface SelectedDateContextType {
  selectedDate: SelectedDate;
  setSelectedDate: React.Dispatch<React.SetStateAction<SelectedDate>>;
}

const SelectedDateContext = createContext<SelectedDateContextType>({
  selectedDate: { dayNo: 1, month: "january" },
  setSelectedDate: () => {},
});

function CalendarTopbar() {
  const { selectedDate, setSelectedDate } = useContext(SelectedDateContext);
  return (
    <div className="calendar-topbar">
      <div className="date-field-container">
        <label>Day:</label>
        <input type="text" placeholder="day" value={selectedDate.dayNo} />
      </div>
      <div className="date-field-container">
        <label htmlFor="months">Month:</label>
        {/* <input type="text" placeholder="month" /> */}
        <select
          name="months"
          id="months"
          value={selectedDate.month} // controlled value
          onChange={(e) => {
            // update context or state here
            setSelectedDate({ ...selectedDate, month: e.target.value });
          }}
        >
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">August</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
        </select>
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
  const [selectedDate, setSelectedDate] = useState({
    dayNo: 1,
    month: "january",
  });
  const value = { selectedDate, setSelectedDate };

  useEffect(() => console.log(selectedDate));

  return (
    <SelectedDateContext.Provider value={value}>
      <div className="calendar-container">
        <CalendarTopbar />
        <CalendarGrid />
      </div>
    </SelectedDateContext.Provider>
  );
}
