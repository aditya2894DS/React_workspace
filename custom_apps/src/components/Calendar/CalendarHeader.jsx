function CalendarHeader({ monthName, yearNumber }) {
  return (
    <>
      <div
        className="container flex-row justify-between align-center"
        id="calendar-header"
      >
        <div className="iconHolder" id="go-backward"></div>
        <p>
          {monthName}
          {yearNumber}
        </p>
        <div className="iconHolder" id="go-forward"></div>
      </div>
    </>
  );
}

export default CalendarHeader;
