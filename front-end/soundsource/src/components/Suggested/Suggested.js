import React, { Component } from "react";
import "./Suggested.css";

export class Suggested extends React.Component{
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
        <div className="text-center">
          {suggested.map(suggest =>
            <div key={suggest.id}>
            <p>
            {suggest.trackName}
            {"  by "}
            {suggest.artistName}
          </p>
        </div>
        )}
        </div>
          
      );
    }
  }



export default Suggested;