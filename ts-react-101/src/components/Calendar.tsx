import { createContext, useContext, useState, useMemo } from "react";
import "../styles/Calendar.css";
import { DateGen } from "../utils/Calendar/DateGen";

const dayObjects = [
  { short: "Mon", dayName: "Monday" },
  { short: "Tue", dayName: "Tuesday" },
  { short: "Wed", dayName: "Wednesday" },
  { short: "Thur", dayName: "Thursday" },
  { short: "Fri", dayName: "Friday" },
  { short: "Saturday", dayName: "Saturday" },
  { short: "Sun", dayName: "Sunday" },
];

interface SelectedDate {
  month: string;
  dayNo: number;
}

interface SelectedDateContextType {
  selectedDate: SelectedDate;
  setSelectedDate: React.Dispatch<React.SetStateAction<SelectedDate>>;
}

interface CalendarDate {
  dayNo: number;
  dayName?: string;
  month: string;
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
        <input
          type="text"
          placeholder="day"
          value={selectedDate.dayNo}
          onChange={(e) =>
            setSelectedDate({ ...selectedDate, dayNo: Number(e.target.value) })
          }
        />
      </div>
      <div className="date-field-container">
        <label htmlFor="months">Month:</label>
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

function DayFilterCol({
  filteredDates,
  dayName,
  short,
}: {
  filteredDates: CalendarDate[];
  dayName: string;
  short: string;
}) {
  // console.log(dayName);
  return (
    <div className="day-filter-column">
      <p>{short}</p>
      {filteredDates.map((date) =>
        date.dayName === dayName ? <DateTile date={date} /> : null,
      )}
    </div>
  );
}

function CalendarGrid({ dates }: { dates: CalendarDate[] }) {
  const { selectedDate } = useContext(SelectedDateContext);

  const filteredDates = (function filterDateAsPerSelectedMonth() {
    const filterDates = dates.filter(
      (date) => date.month === selectedDate.month,
    );
    return filterDates;
  })();

  return (
    <div className="calendar-grid">
      {filteredDates &&
        dayObjects.map((dayObj) => (
          <DayFilterCol
            filteredDates={filteredDates}
            dayName={dayObj.dayName}
            short={dayObj.short}
          />
        ))}
    </div>
  );
}

function DateTile({ date }: { date: CalendarDate }) {
  const { selectedDate, setSelectedDate } = useContext(SelectedDateContext);

  function handleTileClick() {
    console.log(date);
    setSelectedDate({ ...selectedDate, dayNo: date.dayNo });
  }

  return (
    <div
      className={`calendar-tile ${selectedDate.dayNo === date.dayNo && selectedDate.month === date.month ? "selected" : ""}`}
      onClick={handleTileClick}
    >
      <p>{date.dayNo}</p>
    </div>
  );
}

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState({
    dayNo: 1,
    month: "january",
  });

  const value = { selectedDate, setSelectedDate };

  const allDates = useMemo(() => DateGen(), []);

  return (
    <SelectedDateContext.Provider value={value}>
      <div className="calendar-container">
        <CalendarTopbar />
        <CalendarGrid dates={allDates} />
      </div>
    </SelectedDateContext.Provider>
  );
}
