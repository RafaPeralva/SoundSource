import React from "react";
import { Button } from "../Button/Button";
import "./SearchBar.css";

import axios from "axios";

export class SearchBar extends React.Component {
  //song obj for database
  songInfo = {
    artistName: "",
    trackName: "",
    id: "",
    upvoteCount: 0
  };

  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      searchText: "",
      // song: this.songInfo,
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

  
  //takes in the data from the search
  //sets the variables to the search data from the JSON
  //makes a POST request with Search data to add to the suggested table in the database
  handleAddClick (searchList){
    var song = this.songInfo;

    song.artistName = searchList.artists[0].name;
    song.trackName = searchList.name;
    song.id = searchList.id;

    var url = 'http://localhost:8080/suggested';
    fetch(url,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' 
      },
      body: JSON.stringify( song )
    }).then((result)=>{
      result.json().then((res)=>{
        console.warn('res',res)
      })
    })
  }

  makeList = () => {
    let search = this.state.apiData;
    let list = search.map((searchList) => {
      console.log(search);
      return (
        <div className="text-center" key={searchList.id}>
          <p>
            <a
              type="button"
              className="add-btn"
              onClick={() => this.handleAddClick(searchList)}
            >
              {"+"}
            </a>
            {" " + searchList.name}
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
          <h3>Search Songs:</h3>
          <input
            type="text"
            id="navbar-search"
            value={this.state.searchText}
            onChange={this.handleInputChange}
            placeholder="Search..."
            name="search"
            className="searchInput"
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
          <div>
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
