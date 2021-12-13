import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Playlist.css";

const PlaylistDisplay = ( {playlistName }) => {
  const [playlist, setPlaylist] = useState([])

  const getData = async () => {
    try {
      const songs = await axios.get("http://localhost:8080/playlist");
      setPlaylist(songs.data);

      // console.log("songsssssssss" + songs.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getData();
  }),
    [];

  const getPlaylistName = (play) => {
    let same = true;
    play.playlistName === playlistName ? same = true : same = false;

    return same;
  }

  return (
    <div className="suggested">
      {playlist.map((song) => (
        <div>
        {getPlaylistName(song) ?
          <div>
            {" "}
            <p className="suggested-song"> {song.trackName} </p>{" "}
            <p className="suggested-artist"> by: {song.artistName}</p>
          </div>
        : null
        } 
        </div>
      ))}
      </div>
    );
  };

export default PlaylistDisplay;
