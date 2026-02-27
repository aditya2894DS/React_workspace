function DayCard({ dayName, dayNumber }) {
  return (
    <>
      <div className="container flex-column" id="day-card-container">
        <p className="dayName">{dayName}</p>
        <p className="dayNumber">{dayNumber}</p>
      </div>
    </>
  );
}

export default DayCard;
