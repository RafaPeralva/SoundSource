import React, { Component } from "react";
import "./Suggested.css";

export class Suggested extends React.Component {
  state = {
    suggested: []
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/suggested');
    const body = await response.json();
    this.setState({suggested: body});
  }

  render() {
    const {suggested} = this.state;
      return (
        <div className="suggested">
          {suggested.map(suggest =>
            <div key={suggest.id}>
            <p>
            {suggest.upvoteCount}
            <button className = "upvote" /*onClick={() => upvoteSong()}*/><img src="/images/upvote.png" alt="Upvote Button" width = "20"/></button>
            {suggest.trackName}<br></br>
            <span>{suggest.artistName}</span>
          </p>
        </div>
        )}
        </div>
          
      );
    }
  }



export default Suggested;