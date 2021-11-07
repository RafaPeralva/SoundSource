import React, { Component } from "react";
import "./Suggested.css";

export class Suggested extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      numOfVotes: 0,
    };
  }
  // const[numOfVotes, upvotedSong] = useState(0);
  
  // upvoteSong = () => {
  //   this.numOfVotes++;
  // }
  
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
        <div className="text-left">
          {suggested.map(suggest =>
            <div key={suggest.id}>
            <p>
            <h1> {this.numOfVotes} </h1>
            <button className = "upvote" onClick={() => upvoteSong()}><img src="/images/upvote.png" alt="Upvote Button" width = "20"/></button>
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