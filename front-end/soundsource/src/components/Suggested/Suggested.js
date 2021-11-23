import React, { Component } from "react";
import "./Suggested.css";

export class Suggested extends Component {
  state = {
    suggested: [],
    trackIds: "",
  };

  songInfo = {
    artistName: "",
    trackName: "",
    id: "",
    upvoteCount: 0,
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:8080/suggested");
    const body = await response.json();
    this.setState({ suggested: body });
  }

  handleIncrementUpvote(suggest) {
    var song = this.songInfo;

    song.artistName = suggest.artistName;
    song.trackName = suggest.trackName;
    song.id = suggest.id;
    song.upvoteCount = suggest.upvoteCount + 1;

    console.log(song.upvoteCount);

    var url = "http://localhost:8080/suggested/" + song.id;
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(song),
    }).then((result) => {
      result.json().then((res) => {
        console.warn("res", res);
      });
    });
    window.location.reload();
  }

  render() {
    const { suggested } = this.state;
    return (
      <div className="suggested">
        {suggested.map((suggest) => (
          <div key={suggest.id}>
            <p className="suggested-song">
              <div className="upvote">
                {suggest.upvoteCount}
                <button
                  className="upvote"
                  onClick={() => this.handleIncrementUpvote(suggest)}
                >
                  <img
                    src="/images/upvote.png"
                    alt="Upvote Button"
                    width="20"
                  />
                </button>
              </div>
              {suggest.trackName}
            </p>
            <p className="suggested-artist"> by {suggest.artistName}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Suggested;
