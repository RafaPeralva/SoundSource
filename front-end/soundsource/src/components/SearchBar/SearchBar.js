import React from "react";
import { Button } from "../Button/Button";
import "./SearchBar.css";
import axios from "axios";

export class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      apiData: [],
      searchText: "",
      found: false 
    }
  }  

handleInputChange = (event) => {
  this.setState({searchText: event.target.value});
}

handleSearchClick = async () => {
  let songName = this.state.searchText;//ditto
  let linkToAPI = "http://localhost:8080/api/search?q=" + songName;
                  //'https://pokeapi.co/api/v2/pokemon/ditto';

  try {
      let response = await axios.get(linkToAPI);
      //below will only execute if API response is sucessful
      //to get actual object from response you need to do
      //response.data
      this.setState({apiData: response.data, found: true});
  } catch (error) {
      if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          console.log(error.response.data); //Not Found
          console.log(error.response.status); //404
          this.setState({found: false});
      }
 
  }
}

makeList = () => {
  let search = this.state.apiData;
  let list = search.map( (searchList) => {
    console.log(search);
    return (
      <div className="text-center" key={searchList.uri}>
      <li>{"Song title: "}{searchList.name}</li>
      <p>{'Artist: '}{searchList.artists[0].name}</p>
      </div>
      );
  });
  return list;
}

render(){
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
              <Button className="searchBtn" type="submit" onClick={this.handleSearchClick}>
                Search
              </Button>
            </div>
            { this.state.found
            ? <div>
              <ul>{this.makeList()}</ul>
              </div>
              : <h4>No results</h4>
            }
          </div>
      );
    }
}

export default SearchBar;


