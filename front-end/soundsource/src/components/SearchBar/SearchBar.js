import React from "react";
import { Button } from "../Button/Button";
import "./SearchBar.css";

import axios from "axios";

export class SearchBar extends React.Component {
  //song obj for database
  songInfo = {
    artistName: "",
    trackName: "",
    trackURI: "",
    playlistName: "",
    upvoteCount: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      searchText: "",
      found: false,
    };
  }

  handleInputChange = (event) => {
    this.setState({ searchText: event.target.value });
  };

  handleSearchClick = async () => {
    let songName = this.state.searchText;
    let linkToAPI = "http://localhost:8080/api/search?q=" + songName;

    try {
      let response = await axios.get(linkToAPI);

      //below will only execute if API response is sucessful
      //to get actual object from response you need to do
      //response.data
      this.setState({ apiData: response.data, found: true });
    } catch (error) {
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error.response.data); //Not Found
        console.log(error.response.status); //404
        this.setState({ found: false });
      }
    }
  };

  handleEnter = (e) => {
    if (e.charCode === 13) {
      this.handleSearchClick();
    }
  };

  //takes in the data from the search
  //sets the variables to the search data from the JSON
  //makes a POST request with Search data to add to the suggested table in the database
  handleAddClick(searchList) {
    var song = this.songInfo;

    song.artistName = searchList.artists[0].name;
    song.trackName = searchList.name;
    song.trackURI = searchList.id;
    song.playlistName = "GENERAL";

    let linkToAPI = "http://localhost:8080/suggested";
    axios.get(linkToAPI).then((response) => {
      var found = false;
      for (var i in response.data) {
        if (
          response.data[i].trackURI === song.trackURI &&
          response.data[i].playlistName === song.playlistName
        ) {
          found = true;
        }
      }
      if (!found) {
        var url = "http://localhost:8080/suggested";
        fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(song),
        }).then((result) => {
          result.json().then((res) => {
            console.warn("res", res);
          });
        });
      }
      window.location.reload();
    });
  }

  makeList = () => {
    let search = this.state.apiData;
    let list = search.map((searchList) => {
      // console.log(search);
      return (
        <div className="results" key={searchList.id}>
          <p className="song">
            <a
              type="button"
              className="add-btn"
              onClick={() => this.handleAddClick(searchList)}
            >
              {"+"}
            </a>
            {" " + searchList.name}
          </p>
          <p className="artist">
            {"  by "}
            {searchList.artists[0].name}
          </p>
        </div>
      );
    });
    return list;
  };

  render() {
    return (
      <div className="searchWrapper">
        <div className="searchBar">
          <input
            type="text"
            id="navbar-search"
            value={this.state.searchText}
            onChange={this.handleInputChange}
            placeholder="Search..."
            name="search"
            className="searchInput"
            onKeyPress={this.handleEnter}
          />
          <Button
            className="searchBtn"
            type="submit"
            onClick={this.handleSearchClick}
          >
            Search
          </Button>
        </div>
        {this.state.found ? (
          <div className="searchSongs">
            <ul>{this.makeList()}</ul>
          </div>
        ) : (
          <h4>No results</h4>
        )}
      </div>
    );
  }
}

export default SearchBar;
