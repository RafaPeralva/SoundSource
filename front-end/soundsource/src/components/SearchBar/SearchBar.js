import React from "react";
import { Button } from "../Button/Button";
import "./SearchBar.css";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }
  handleChange(e) {
    this.setState({ searchValue: e.target.value });
  }

  render() {
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
              onChange={this.handleChange.bind(this)}
            />
            {console.log(this.state.searchValue)}

            <Button className="searchBtn" type="submit">
              Search
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
