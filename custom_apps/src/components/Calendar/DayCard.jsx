function DayCard({ dayName, dayNumber, getDayNumber }) {
  function handleCardClick(e) {
    let dayNumber = e.currentTarget.getAttribute("data-day-number");
    getDayNumber(dayNumber);
  }

  return (
    <>
      <div
        className="container flex-column"
        id="day-card-container"
        data-day-number={dayNumber}
        onClick={(e) => handleCardClick(e)}
      >
        <p className="dayName">{dayName}</p>
        <p className="dayNumber">{dayNumber}</p>
      </div>
    </>
  );
}

export default DayCard;
