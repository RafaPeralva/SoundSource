import React from "react";
import { Button } from "../Button/Button";
import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <div className="searchWrapper">
      <form action="/" method="get">
        <div className="searchBar">
          <input
            type="text"
            id="navbar-search"
            placeholder="Search..."
            name="search"
            className="searchInput"
          />
          <Button className="searchBtn" type="submit">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
