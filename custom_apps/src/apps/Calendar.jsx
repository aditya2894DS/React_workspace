import CalendarHeader from "../components/Calendar/CalendarHeader";
import DayCard from "../components/Calendar/DayCard";
import "../styles/Calendar.css";
import { useEffect, useState } from "react";
import { CalendarContext } from "../contexts/CalendarContext";
import TaskContainerCard from "../components/Calendar/TaskContainerCard";

function WeekRow({ children }) {
  return <div className="week-row">{children}</div>;
}

function Calendar() {
  const [generatedDatesArrState, setGeneratedDatesArrState] = useState([]);
  const [selectedDate, setSelectedDate] = useState(0);

  const monthsMapped = [
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" },
  ];

  function getMonthName(id) {
    let monthObj = monthsMapped.filter((month) => month.id === id);
    return monthObj[0].name;
  }

  function incrementDays(count, monthId) {
    var generatedDatesArr = [];
    for (var i = 1; i < count + 1; i++) {
      var dateObj = { day: "", month: "", dayName: "" };
      switch (i % 7) {
        case 1: {
          dateObj.day = i;
          dateObj.month = getMonthName(monthId);
          dateObj.dayName = "Sun";
          generatedDatesArr.push(dateObj);
          break;
        }
        case 2: {
          dateObj.day = i;
          dateObj.month = getMonthName(monthId);
          dateObj.dayName = "Mon";
          generatedDatesArr.push(dateObj);
          break;
        }
        case 3: {
          dateObj.day = i;
          dateObj.month = getMonthName(monthId);
          dateObj.dayName = "Tue";
          generatedDatesArr.push(dateObj);
          break;
        }
        case 4: {
          dateObj.day = i;
          dateObj.month = getMonthName(monthId);
          dateObj.dayName = "Wed";
          generatedDatesArr.push(dateObj);
          break;
        }
        case 5: {
          dateObj.day = i;
          dateObj.month = getMonthName(monthId);
          dateObj.dayName = "Thu";
          generatedDatesArr.push(dateObj);
          break;
        }
        case 6: {
          dateObj.day = i;
          dateObj.month = getMonthName(monthId);
          dateObj.dayName = "Fri";
          generatedDatesArr.push(dateObj);
          break;
        }
        case 0: {
          dateObj.day = i;
          dateObj.month = getMonthName(monthId);
          dateObj.dayName = "Sat";
          generatedDatesArr.push(dateObj);
          break;
        }
        default: {
          break;
        }
      }
    }
    return generatedDatesArr;
  }

  function generateDates() {
    var allDates = [];
    for (var i = 1; i < monthsMapped.length + 1; i++) {
      if ([1, 3, 5, 7, 8, 10, 12].includes(i)) {
        let result = incrementDays(31, i);
        allDates.push(result);
      } else if ([4, 6, 9, 11].includes(i)) {
        let result = incrementDays(30, i);
        allDates.push(result);
      } else {
        let result = incrementDays(28, i);
        allDates.push(result);
      }
    }
    return allDates;
  }

  function handleDayNumber(dayNo) {
    let multiple = dayNo / 7;
    if (multiple <= 1) {
      setSelectedDate(1);
    } else if (multiple <= 2) {
      setSelectedDate(2);
    } else if (multiple <= 3) {
      setSelectedDate(3);
    } else if (multiple <= 4) {
      setSelectedDate(4);
    } else if (multiple <= 5) {
      setSelectedDate(5);
    }
  }

  function generateWeekRows(arr) {
    var weeklyArr = [];
    var newWeekArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].day % 7 === 1) {
        newWeekArr = [];
        newWeekArr.push(arr[i]);
        weeklyArr.push(newWeekArr);
        continue;
      } else {
        newWeekArr.push(arr[i]);
      }
    }
    return weeklyArr.map((week, index) => (
      <WeekRow>
        <div className="days-container">
          {week.map((day) => (
            <DayCard
              dayName={day.dayName}
              dayNumber={day.day}
              getDayNumber={handleDayNumber}
            />
          ))}
        </div>
        <TaskContainerCard weekNo={index} selectedDate={selectedDate} />
      </WeekRow>
    ));
  }

  useEffect(() => {
    var generatedDates = generateDates();
    setGeneratedDatesArrState(generatedDates);
  }, []);

  return (
    <>
      <CalendarContext value={{ day: selectedDate }}>
        <div className="container flex-column calendar-container">
          <CalendarHeader monthName="January" yearNumber={2026} />
          <div className="calendar-grid">
            {generatedDatesArrState.length === 0 ? (
              <p>No dates generated</p>
            ) : (
              generatedDatesArrState.map((dateObjArr) => {
                return (
                  <div className="month-container">
                    {generateWeekRows(dateObjArr)}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </CalendarContext>
    </>
  );
}
export default Calendar;
