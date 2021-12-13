import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Suggested.css";

const Suggested = () => {
  const [suggested, setSuggested] = useState([]);
  // const { upvoted, setUpvoted } = useState(false);

  // var songInfo = {
  //   id: 1,
  //   artistName: "",
  //   trackName: "",
  //   trackURI: "",
  //   upvoteCount: 0,
  //   playlistName: "",
  // };

  // var upvoteImages = {
  //   displayImg: "",
  // };

  // var userData = {
  //   userID: "",
  //   playlistName: "",
  //   songURI: "",
  // };

  const getData = async () => {
    try {
      const songs = await axios.get("http://localhost:8080/suggested");
      setSuggested(songs.data);

      // console.log("songsssssssss" + songs.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getData();
  }),
    [];
  // const handleIncrementUpvote = (suggest) => {
  //   var song = songInfo;

  //   song.id = suggest.id;
  //   song.artistName = suggest.artistName;
  //   song.trackName = suggest.trackName;
  //   song.trackURI = suggest.trackURI;
  //   song.upvoteCount = suggest.upvoteCount;
  //   song.playlistName = suggest.playlistName;

  //   // this if else parameter would change to check if the user has already upvoted it
  //   // if upvoted, dont upvote
  //   // else, upvote the song and store the song to the user's upvote array of trackuris

  //   // Store upvoted song in general playlist for this user
  //   var user = userData;
  //   user.userID = "99999999";
  //   user.playlistName = song.playlistName;
  //   user.songURI = song.trackURI;

  //   // get user id and check if upvoted already
  //   let linkToAPI = "http://localhost:8080/api/userId";
  //   axios.get(linkToAPI).then((response) => {
  //     user.userID = response.data;

  //     let linkToAPI = "http://localhost:8080/user";
  //     axios.get(linkToAPI).then((response) => {
  //       if (response.data[0] != null) {
  //         let found = false;
  //         for (var i in response.data) {
  //           if (
  //             response.data[i].songURI === user.songURI &&
  //             response.data[i].userID === user.userID
  //           ) {
  //             found = true;
  //           }
  //         }

  //         if (!found) {
  //           this.upvoteSong(song, user);
  //         }
  //       } else {
  //         this.upvoteSong(song, user);
  //       }

  //       // // reloads component
  //       // this.componentDidMount();
  //     });
  //   });
  // };
  // const getPlaylistName = (suggest) => {
  //   let same = true;
  //   suggest.playlistName = this.playlistName;

  //   return same;
  // };

  // const checkUpvoted = (suggest, upvoted) => {
  //   var song = songInfo;
  //   song.trackURI = suggest.trackURI;

  //   if (upvoted && upvoted.length !== 0) {
  //     let upvotedData = upvoted;

  //     let found = false;
  //     for (var i in upvotedData) {
  //       if (
  //         upvotedData[i].songURI === song.trackURI &&
  //         upvotedData[i].userID === userData.userID
  //       ) {
  //         found = true;
  //       }
  //     }

  //     if (found) {
  //       getImageName(true);
  //     } else {
  //       getImageName(false);
  //     }
  //   } else {
  //     getImageName(false);
  //   }
  // };

  // const getImageName = (isupvoted) => {
  //   var image = upvoteImages;
  //   image.displayImg = isupvoted ? "/images/upvote.png" : "/images/upvoted.png";
  // };
  return (
    <div className="suggested">
      {suggested.map((song) => (
        <div>
          {" "}
          <p className="suggested-song"> {song.trackName} </p>{" "}
          <p className="suggested-artist"> by: {song.artistName}</p>
        </div>
      ))}
      {/* {suggested.map((suggest) => (
        <div key={suggest.songURI}>
          {getPlaylistName(suggest) ? (
            <div>
              <p className="suggested-song">
                <div className="upvote">
                  {checkUpvoted(suggest, upvoted)}
                  {suggest.upvoteCount}
                  <button
                    className="upvote"
                    onClick={() => handleIncrementUpvote(suggest)}
                  >
                    <img
                      src={upvoteImages.displayImg}
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
      ))} */}
    </div>
  );
};

export default Suggested;
