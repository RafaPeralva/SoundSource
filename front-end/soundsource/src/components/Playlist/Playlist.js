import "./Playlist.css";
import React, { useEffect } from "react";
import axios from "axios";

export const Playlist = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      axios.get("http://localhost:8080/suggested").then((response) => {
        if (response.data[0] !== null) {
          let firstUpvote = 0;
          let firstId = "";
          let firstArrayIndx = 0;

          let secondUpvote = 0;
          let secondId = "";
          let secondArrayIndx = 0;

          let thirdUpvote = 0;
          let thirdId = "";
          let thirdArrayIndx = 0;

          for (var i in response.data) {
            if (
              response.data[i].playlistName === "General" &&
              response.data[i].upvoteCount >= firstUpvote
            ) {
              firstId = response.data[i].id;
              firstUpvote = response.data[i].upvoteCount;
              firstArrayIndx = i;
            }
            if (
              response.data[i].playlistName === "Party" &&
              response.data[i].upvoteCount >= secondUpvote
            ) {
              secondId = response.data[i].id;
              secondUpvote = response.data[i].upvoteCount;
              secondArrayIndx = i;
            }
            if (
              response.data[i].playlistName === "Working Out" &&
              response.data[i].upvoteCount >= thirdUpvote
            ) {
              thirdId = response.data[i].id;
              thirdUpvote = response.data[i].upvoteCount;
              thirdArrayIndx = i;
            }
          }

          var songIndx = [firstArrayIndx, secondArrayIndx, thirdArrayIndx];
          var songId = [firstId, secondId, thirdId];

          for (i in songIndx) {
            if (songId[i] !== "") {
              let song = response.data[songIndx[i]];

              fetch("http://localhost:8080/playlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(song),
              }).then((result) => {
                result.json().then((res) => {
                  console.warn("res", res);
                });
              });

              fetch("http://localhost:8080/suggested/" + songId[i], {
                method: "DELETE",
              })
                .then((res) => res.text()) // or res.json()
                .then((res) => console.log(res));
            }
          }
        }
      });
    }, 30000);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  return <div></div>;
};

export default Playlist;
