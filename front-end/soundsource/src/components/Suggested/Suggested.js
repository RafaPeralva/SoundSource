import React, { Component, useState, useEffect } from "react";
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

  componentDidMount() {
    this.loadData();
    setInterval(this.loadData, 5000);
  }

  loadData() {
    fetch(`http://localhost:8080/suggested`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          suggested: data,
        })
      )
      .catch((error) => {
        console.log(error);
      });
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
              response.data[i].songURI === user.songURI &&
              response.data[i].userID === user.userID
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

        // reloads component
        this.componentDidMount();
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
          upvotedData[i].songURI === song.trackURI &&
          upvotedData[i].userID === this.userData.userID
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
    image.displayImg = isupvoted ? "/images/upvote.png" : "/images/upvoted.png";
  }

  getPlaylistName(suggest) {
    console.log(suggest.playlistName);
    let same = true;
    suggest.playlistName === this.props.playlistName
      ? (same = true)
      : (same = false);

    return same;
  }

  render() {
    const { suggested } = this.state;
    const { upvoted } = this.state;
    const isTrue = true;
    if (suggested.length > 0) {
      return (
        <div className="suggested">
          {suggested.map((suggest) => (
            <div key={suggest.songURI}>
              {this.getPlaylistName(suggest) ? (
                <div>
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
              ) : null}
            </div>
          ))}
        </div>
      );
    } else {
      return <div>no suggested songs here</div>;
    }
  }
}

export default Suggested;
