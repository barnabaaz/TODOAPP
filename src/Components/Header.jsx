import React from "react";
import { Time, Day, Box } from "../style";
const Header = () => {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
  };
  const weekday = new Array(7);
  weekday[0] = "sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thurs";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  const todaysDate = new Date();
  return (
    <>
      <Time>
        <Day>{todaysDate.getDay()}</Day>
        <Box>
          <div className="month">
            {todaysDate.toLocaleString("default", { month: "long" })}
          </div>
          <div className="year">{todaysDate.getFullYear()}</div>
        </Box>
      </Time>
      <div className="time-clock">{time} </div>
      <div className="day_of_week">{weekday[todaysDate.getDay()]}</div>
    </>
  );
};

export default Header;
