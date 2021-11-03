import React from "react";
import { Button } from "../Button/Button";
import "./SearchBar.css";
import { useState } from "react";
import axios from "axios";
import SearchResults from "../SearchResults/SearchResults";

export default function SearchBar() {
  const [search, setSearch] = useState([]);

  const url = "http://localhost:8080/api/search?q=power";

  const handleGetSearch = () => {
    axios
      .get(url)
      .then((response) => {
        setSearch(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="searchWrapper">
      <div className="searchBar">
        <div>
          <input
            type="text"
            id="navbar-search"
            placeholder="Search..."
            name="search"
            className="searchInput"
          />
          <Button className="searchBtn" type="submit" onClick={handleGetSearch}>
            Search
          </Button>
        </div>
        <SearchResults search={search} />
      </div>
    </div>
  );
}