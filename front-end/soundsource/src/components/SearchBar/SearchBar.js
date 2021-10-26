import React from "react";
import { Button } from "../Button/Button";
import "./SearchBar.css";
import { useEffect, useState } from 'react'


  function searchButton() {

    const [searchResults,setsearchResults] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/api/search?q=babydoll")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setsearchResults(data)
            })
    }, [])

    return (
        <div>
            {searchResults ? (
                searchResults.map((searchResult) => {
                    return <h1 key= {searchResult.name}>{searchResult.name}</h1>
                })
            ):
            (
                <h1>LOADING...</h1>
            )}
        </div>
    );
}


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
          <Button className="searchBtn" type="submit" onClick={searchButton}>
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
