import CalendarHeader from "../components/Calendar/CalendarHeader";
import "../styles/Calendar.css";
import { useEffect, useRef } from "react";

function Calendar() {
  const generatedDatesArrRef = useRef([]);

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

  const daysMapped = [
    { id: 1, name: "Sunday" },
    { id: 2, name: "Monday" },
    { id: 3, name: "Tuesday" },
    { id: 4, name: "Wednesday" },
    { id: 5, name: "Thursday" },
    { id: 6, name: "Friday" },
    { id: 7, name: "Saturday" },
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
          dateObj.dayName = "Sunday";
          generatedDatesArr.push(dateObj);
          break;
        }
        case 2: {
          //   var dateObj = { day: "", month: "", dayName: "" };
          dateObj.day = i;
          dateObj.month = getMonthName(monthId);
          dateObj.dayName = "Monday";
          generatedDatesArr.push(dateObj);
          break;
        }
        case 3: {
          //   var dateObj = { day: "", month: "", dayName: "" };
          dateObj.day = i;
          dateObj.month = getMonthName(monthId);
          dateObj.dayName = "Tuesday";
          generatedDatesArr.push(dateObj);
          break;
        }
        case 4: {
          //   var dateObj = { day: "", month: "", dayName: "" };
          dateObj.day = i;
          dateObj.month = getMonthName(monthId);
          dateObj.dayName = "Wednesday";
          //   generatedDatesArr.push(dateObj)
          generatedDatesArr.push(dateObj);
          break;
        }
        case 5: {
          //   var dateObj = { day: "", month: "", dayName: "" };
          dateObj.day = i;
          dateObj.month = getMonthName(monthId);
          dateObj.dayName = "Thursday";
          //   generatedDatesArr.push(dateObj);
          generatedDatesArr.push(dateObj);
          break;
        }
        case 6: {
          //   var dateObj = { day: "", month: "", dayName: "" };
          dateObj.day = i;
          dateObj.month = getMonthName(monthId);
          dateObj.dayName = "Friday";
          //   generatedDatesArr.push(dateObj);
          generatedDatesArr.push(dateObj);
          break;
        }
        case 0: {
          //   var dateObj = { day: "", month: "", dayName: "" };
          dateObj.day = i;
          dateObj.month = getMonthName(monthId);
          dateObj.dayName = "Saturday";
          //   generatedDatesArr.push(dateObj);
          generatedDatesArr.push(dateObj);
          break;
        }
        default: {
          break;
        }
      }
    }

    generatedDatesArrRef.current.push(generatedDatesArr);
    return generatedDatesArrRef;
  }

  function generateDates() {
    for (var i = 1; i < monthsMapped.length + 1; i++) {
      if ([1, 3, 5, 7, 8, 10, 12].includes(i)) {
        incrementDays(31, i);
      } else if ([4, 6, 9, 11].includes(i)) {
        incrementDays(30, i);
      } else {
        incrementDays(28, i);
      }
    }
  }

  useEffect(() => {
    generatedDatesArrRef.current = []; // reset
    generateDates();
    console.log(generatedDatesArrRef.current);
    // console.log(dates);
  }, []);

  return (
    <>
      <div className="container flex-column calendar-container">
        <CalendarHeader monthName="January" yearNumber={2026} />
        <div className="calendar-grid"></div>
      </div>
    </>
  );
}
export default Calendar;
