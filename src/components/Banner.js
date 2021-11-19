import { Button } from "@mui/material";
import React, { useState } from "react";
import { Search } from "./Search";
import "./Banner.css";
export const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search></Search>}
        <Button
          className="banner_searchButton"
          variant="outlined"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of gataway to uncoer the idden gems near you
        </h5>
        <Button className="banner__button">Explore Nearby</Button>
      </div>
    </div>
  );
};
