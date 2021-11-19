import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./Search.css";
import PeopleIcon from "@mui/icons-material/People";

import { DateRangePicker } from "react-date-range";

export const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <div className="search">
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        className="search__datePicker"
      ></DateRangePicker>
      <div className="search__info">
        <h2>Number of guests</h2>
        <PeopleIcon />
      </div>
      <div className="search__inputWrapper">
        <input
          min={0}
          defaultValue={2}
          type="number"
          className="serch__inputField"
        ></input>
        <button>Search Airbnb</button>
      </div>
    </div>
  );
};
