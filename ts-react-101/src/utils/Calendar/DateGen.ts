const monthObjects = [
  { id: 1, monthName: "January" },
  { id: 2, monthName: "February" },
  { id: 3, monthName: "March" },
  { id: 4, monthName: "April" },
  { id: 5, monthName: "May" },
  { id: 6, monthName: "June" },
  { id: 7, monthName: "July" },
  { id: 8, monthName: "August" },
  { id: 9, monthName: "September" },
  { id: 10, monthName: "October" },
  { id: 11, monthName: "November" },
  { id: 12, monthName: "December" },
];

function getWeek(i: number) {
  const no = i / 7;

  if (no <= 1) {
    return 1;
  } else if (no > 1 && no <= 2) {
    return 2;
  } else if (no > 2 && no <= 3) {
    return 3;
  } else if (no > 3 && no <= 4) {
    return 4;
  } else if (no > 4 && no <= 5) {
    return 5;
  }
}

const dayObjects = [
  { id: 1, dayName: "Thursday" },
  { id: 2, dayName: "Friday" },
  { id: 3, dayName: "Saturday" },
  { id: 4, dayName: "Sunday" },
  { id: 5, dayName: "Monday" },
  { id: 6, dayName: "Tuesday" },
  { id: 0, dayName: "Wednesday" },
];

const monthInt = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

function getDate(startDayNo: number) {
  // for (let i = startDayNo; i < startDayNo + 7; i++) {
  const no = startDayNo % 7;
  const dayNo = dayObjects.find((day) => day.id === no);
  // console.log(dayNo?.dayName, startDayNo);
  // }
  const dateObj = { dayNo: 0, dayName: dayNo?.dayName, month: "" };

  return dateObj;
}

export function DateGen() {
  const dates = [];
  for (let i = 1; i < 366; i++) {
    const monthArr = [];
    while (i <= 31) {
      // function for week
      const dateObj = getDate(i);
      dateObj.month = "January";
      dateObj.dayNo = i;
      monthArr.push(dateObj);
      console.log(dateObj);
      i++;
    }
    while (i > 31 && i <= 59) {
      // function for week
      const dateObj = getDate(i);
      dateObj.month = "February";
      dateObj.dayNo = i - 31;
      monthArr.push(dateObj);
      console.log(dateObj);
      i++;
    }
    while (i > 59 && i <= 90) {
      // function for week
      const dateObj = getDate(i);
      dateObj.month = "March";
      dateObj.dayNo = i - 59;
      monthArr.push(dateObj);
      console.log(dateObj);
      i++;
    }
    while (i > 90 && i <= 120) {
      // function for week
      const dateObj = getDate(i);
      dateObj.month = "April";
      dateObj.dayNo = i - 90;
      monthArr.push(dateObj);
      console.log(dateObj);
      i++;
    }
    while (i > 120 && i <= 151) {
      // function for week
      const dateObj = getDate(i);
      dateObj.month = "May";
      dateObj.dayNo = i - 120;
      monthArr.push(dateObj);
      console.log(dateObj);
      i++;
    }
    while (i > 151 && i <= 181) {
      // function for week
      const dateObj = getDate(i);
      dateObj.month = "June";
      dateObj.dayNo = i - 151;
      monthArr.push(dateObj);
      console.log(dateObj);
      i++;
    }
    while (i > 181 && i <= 212) {
      // function for week
      const dateObj = getDate(i);
      dateObj.month = "July";
      dateObj.dayNo = i - 181;
      monthArr.push(dateObj);
      console.log(dateObj);
      i++;
    }
    while (i > 212 && i <= 243) {
      // function for week
      const dateObj = getDate(i);
      dateObj.month = "August";
      dateObj.dayNo = i - 212;
      monthArr.push(dateObj);
      console.log(dateObj);
      i++;
    }
    while (i > 243 && i <= 273) {
      // function for week
      const dateObj = getDate(i);
      dateObj.month = "September";
      dateObj.dayNo = i - 243;
      monthArr.push(dateObj);
      console.log(dateObj);
      i++;
    }
    while (i > 273 && i <= 304) {
      // function for week
      const dateObj = getDate(i);
      dateObj.month = "October";
      dateObj.dayNo = i - 273;
      monthArr.push(dateObj);
      console.log(dateObj);
      i++;
    }
    while (i > 304 && i <= 334) {
      // function for week
      const dateObj = getDate(i);
      dateObj.month = "November";
      dateObj.dayNo = i - 304;
      monthArr.push(dateObj);
      console.log(dateObj);
      i++;
    }
    while (i > 334 && i <= 365) {
      // function for week
      const dateObj = getDate(i);
      dateObj.month = "December";
      dateObj.dayNo = i - 334;
      monthArr.push(dateObj);
      console.log(dateObj);
      i++;
    }
  }
}
