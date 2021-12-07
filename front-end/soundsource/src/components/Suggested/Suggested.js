import React, { Component } from "react";
import axios from "axios";
import "./Suggested.css";

export class Suggested extends Component {
  state = {
    suggested: [],
    trackIds: ""
  };

  songInfo = {
    artistName: "",
    trackName: "",
    id: "",
    upvoteCount: 0,
    playlistName: "Top100"
  };

  upvoteImages = {
    displayImg: ""
  };

  userData = {
    id: "",
    playlistName: "",
    songURI: ""
  };

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     loaded: false
  //   }
  // }

  async componentDidMount() {
    const response = await fetch("http://localhost:8080/suggested");
    const body = await response.json();
    this.setState({ suggested: body });

    const userIdResponse = await fetch("http://localhost:8080/api/userId");
    const userIdBody = await userIdResponse.json();
    this.userData.id = userIdBody;
    // console.log(userIdBody);

    const upvoteResponse = await fetch("http://localhost:8080/user");
    const upvoteBody = await upvoteResponse.json();
    this.setState({ upvoted: upvoteBody});
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

    // Store upvoted song in general playlist for this user
    var user = this.userData;
    user.id = "99999999";
    user.playlistName = "general";
    user.songURI = song.id;

    // get user id and check if upvoted already
    let linkToAPI = "http://localhost:8080/api/userId";
    axios.get(linkToAPI).then((response) => {
      user.id = response.data;
      console.log("ID: " + user.id);

      let linkToAPI = "http://localhost:8080/user";
      axios.get(linkToAPI).then((response) => {
        if(response.data[0] != null) {
          console.log("Upvoted Data: " + JSON.stringify(response.data));
          console.log(response.data[0].id);

          if(response.data[0].id == user.id && user.songURI == response.data[0].songURI)
          {
            console.log("Song has been upvoted")
          } else {
            console.log("Song has not been upvoted");
          }
        } else {
          console.log("No current upvoted song, will add song");
        }

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
      });
    });
  }

  // checks if song has been stored, if it was, then it was upvoted already
  // if upvoted display upvoted image, else display regular image
  // this function gets called on each row call with the song info
  checkUpvoted(suggest, upvoted) {
    var song = this.songInfo;
    song.id = suggest.id;

    console.log(this.userData.id);

    console.log(song.trackName + ' has loaded, ID: ' + song.id);
  
    if(upvoted != null)
    {
      let upvoteData = upvoted;
      let upvoteId = upvoteData[0].id;
      let upvotedURI= upvoteData[0].songURI;
      
      if(upvoteId == this.userData.id && upvotedURI == song.id) {
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
          <div key={suggest.id}>
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
