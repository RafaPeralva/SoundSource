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
    playlistName: "Top100"
  };

  upvoteImages = {
    displayImg: "",
  };

  userData = {
    id: "",
    playlistName: "",
    songURI: "",
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
    song.upvoteCount = suggest.upvoteCount;

    // this if else parameter would change to check if the user has already upvoted it
    // if upvoted, dont upvote
    // else, upvote the song and store the song to the user's upvote array of trackuris

    console.log(song.upvoteCount);

    if(song.upvoteCount == 0)
    {
      console.log(song.trackName + " will now be upvoted");

      // Increments the upvote by 1
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

      // Store upvoted song in general playlist for this user
      var user = this.userData;
      user.id = "8974124";
      user.playlistName = "general";
      user.songURI = song.id;

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

      // Reload site
      window.location.reload();
    } else {
      console.log(song.trackName + " has already been upvoted");
    }
  }

  checkUpvoted(suggest) {
    // checks if song has been stored, if it was, then it was upvoted already
    // if upvoted display upvoted image, else display regular image
    // this function gets called on each row call with the song info

    var song = this.songInfo;

    song.trackName = suggest.trackName;
    song.upvoteCount = suggest.upvoteCount;

    // console.log(song.trackName + ' has loaded');

    // changes image depending on true or false return
    this.getImageName(song.upvoteCount > 0);
  }

  getImageName(isupvoted) {
    var image = this.upvoteImages;

    if (isupvoted) image.displayImg = "/images/upvote.png";
    else image.displayImg = "/images/upvoted.png";
  }

  render() {
    const { suggested } = this.state;
    return (
      <div className="suggested">
        {suggested.map((suggest) => (
          <div key={suggest.id}>
            <p className="suggested-song">
              <div className="upvote">
                {this.checkUpvoted.call(this, suggest)}
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
