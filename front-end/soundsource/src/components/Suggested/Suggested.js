import React, { Component } from "react";
import axios from "axios";
import "./Suggested.css";

export class Suggested extends Component {
  state = {
    suggested: [],
    trackIds: "",
  };

  songInfo = {
    id: 1,
    artistName: "",
    trackName: "",
    trackURI: "",
    upvoteCount: 0,
    playlistName: "",
  };

  upvoteImages = {
    displayImg: "",
  };

  userData = {
    userID: "",
    playlistName: "",
    songURI: "",
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:8080/suggested");
    const body = await response.json();
    this.setState({ suggested: body });

    const userIdResponse = await fetch("http://localhost:8080/api/userId");
    const userIdBody = await userIdResponse.json();
    this.userData.userID = userIdBody;

    const upvoteResponse = await fetch("http://localhost:8080/user");
    const upvoteBody = await upvoteResponse.json();
    this.setState({ upvoted: upvoteBody });
  }

  handleIncrementUpvote(suggest) {
    var song = this.songInfo;

    song.id = suggest.id;
    song.artistName = suggest.artistName;
    song.trackName = suggest.trackName;
    song.trackURI = suggest.trackURI;
    song.upvoteCount = suggest.upvoteCount;
    song.playlistName = suggest.playlistName;

    // this if else parameter would change to check if the user has already upvoted it
    // if upvoted, dont upvote
    // else, upvote the song and store the song to the user's upvote array of trackuris

    // Store upvoted song in general playlist for this user
    var user = this.userData;
    user.userID = "99999999";
    user.playlistName = song.playlistName;
    user.songURI = song.trackURI;

    // get user id and check if upvoted already
    let linkToAPI = "http://localhost:8080/api/userId";
    axios.get(linkToAPI).then((response) => {
      user.userID = response.data;

      let linkToAPI = "http://localhost:8080/user";
      axios.get(linkToAPI).then((response) => {
        if (response.data[0] != null) {
          let found = false;
          for (var i in response.data) {
            if (
              response.data[i].songURI == user.songURI &&
              response.data[i].userID == user.userID
            ) {
              found = true;
            }
          }

          if (!found) {
            this.upvoteSong(song, user);
          }
        } else {
          this.upvoteSong(song, user);
        }

        // Reload site
        window.location.reload();
      });
    });
  }

  upvoteSong(song, user) {
    song.upvoteCount = song.upvoteCount + 1;

    // Stores updated upvote count in Suggested DB
    var url = "http://localhost:8080/suggested/" + song.id;
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(song),
    }).then((result) => {
      result.json().then((res) => {
        console.warn("suggested - res", res);
      });
    });

    var url = "http://localhost:8080/user";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((result) => {
      result.json().then((res) => {
        console.warn("user - res", res);
      });
    });
  }

  // checks if song has been stored, if it was, then it was upvoted already
  // if upvoted display upvoted image, else display regular image
  // this function gets called on each row call with the song info
  checkUpvoted(suggest, upvoted) {
    var song = this.songInfo;
    song.trackURI = suggest.trackURI;

    if (upvoted && upvoted.length != 0) {
      let upvotedData = upvoted;

      let found = false;
      for (var i in upvotedData) {
        if (
          upvotedData[i].songURI == song.trackURI &&
          upvotedData[i].userID == this.userData.userID
        ) {
          found = true;
        }
      }

      if (found) {
        this.getImageName(true);
      } else {
        this.getImageName(false);
      }
    } else {
      this.getImageName(false);
    }
  }

  getImageName(isupvoted) {
    var image = this.upvoteImages;

    if (isupvoted) {
      image.displayImg = "/images/upvote.png";
    } else {
      image.displayImg = "/images/upvoted.png";
    }
  }

  render() {
    const { suggested } = this.state;
    const { upvoted } = this.state;
    return (
      <div className="suggested">
        {suggested.map((suggest) => (
          <div key={suggest.songURI}>
            <p className="suggested-song">
              <div className="upvote">
                {this.checkUpvoted.call(this, suggest, upvoted)}
                {suggest.upvoteCount}
                <button
                  className="upvote"
                  onClick={() => this.handleIncrementUpvote(suggest)}
                >
                  <img
                    src={this.upvoteImages.displayImg}
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
