import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.css";
export const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt=""
        ></img>
      </div>
      <div className="header__center">
        <input type="text" className="header__searchInput"></input>
        <SearchIcon />
      </div>
      <div className="header__right">
        <p className="header__rightHost">Become a host</p>
        <LanguageIcon className="header__rightIcon" />
        <KeyboardArrowDownIcon className="header__rightIcon" />
        <AccountCircleIcon className="header__rightIcon" />
      </div>
    </div>
  );
};
