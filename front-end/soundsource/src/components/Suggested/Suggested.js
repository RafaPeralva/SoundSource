import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Suggested.css";

const Suggested = ({ playlistName }) => {
  const [suggested, setSuggested] = useState([]);
  const [upvoted, setUpvoted] = useState([]);
  const [userID, setUserID] = useState([]);

  var songInfo = {
    id: 1,
    artistName: "",
    trackName: "",
    trackURI: "",
    upvoteCount: 0,
    playlistName: "",
  };

  var upvoteImages = {
    displayImg: "",
  };

  var userData = {
    userID: "",
    playlistName: "",
    songURI: "",
  };

  const getData = async () => {
    try {
      const songs = await axios.get("http://localhost:8080/suggested");
      setSuggested(songs.data);

      const upvotes = await axios.get("http://localhost:8080/user");
      setUpvoted(upvotes.data);

      if (userID === "") {
        const userId = await axios.get("http://localhost:8080/api/userId");
        setUserID(userId.data);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 1000);

    return () => clearInterval(interval);
  }),
    [];

  const handleIncrementUpvote = (suggest) => {
    var song = songInfo;

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
    var user = userData;
    user.userID = userID;
    user.playlistName = song.playlistName;
    user.songURI = song.trackURI;

    // get user id and check if upvoted already
    let linkToAPI = "http://localhost:8080/user";
    axios.get(linkToAPI).then((response) => {
      if (response.data[0] !== null) {
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
          upvoteSong(song, user);
        }
      } else {
        upvoteSong(song, user);
      }
    });
  };

  const upvoteSong = (song, user) => {
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

    url = "http://localhost:8080/user";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((result) => {
      result.json().then((res) => {
        console.warn("user - res", res);
      });
    });
  };

  // checks if song has been stored, if it was, then it was upvoted already
  // if upvoted display upvoted image, else display regular image
  // this function gets called on each row call with the song info
  const checkUpvoted = (suggest, upvoted) => {
    var song = songInfo;
    song.trackURI = suggest.trackURI;

    if (upvoted && upvoted.length !== 0) {
      let upvotedData = upvoted;

      let found = false;
      for (var i in upvotedData) {
        if (
          upvotedData[i].songURI === song.trackURI &&
          upvotedData[i].userID === userID
        ) {
          found = true;
        }
      }

      if (found) {
        getImageName(true);
      } else {
        getImageName(false);
      }
    } else {
      getImageName(false);
    }
  };

  const getImageName = (isupvoted) => {
    var image = upvoteImages;
    image.displayImg = isupvoted ? "/images/upvote.png" : "/images/upvoted.png";
  };

  const getPlaylistName = (suggest) => {
    let same = true;
    suggest.playlistName === playlistName ? (same = true) : (same = false);

    return same;
  };

  return (
    <div className="suggested">
      {suggested.map((song) => (
        <div>
          {getPlaylistName(song) ? (
            <div>
              {checkUpvoted.call(this, song, upvoted)}
              <p className="suggested-song">
                {song.upvoteCount}
                <button
                  className="upvote"
                  onClick={() => handleIncrementUpvote(song)}
                >
                  <img
                    src={upvoteImages.displayImg}
                    alt="Upvote Button"
                    width="20"
                  />
                </button>
                {song.trackName}
              </p>
              <p className="suggested-artist"> by {song.artistName}</p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Suggested;
