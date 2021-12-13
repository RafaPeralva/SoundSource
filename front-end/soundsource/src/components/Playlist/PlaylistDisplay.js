import React, { Component } from "react";
import "./Playlist.css";

export class PlaylistDisplay extends Component {
  state = {
    playlist: [],
  };

  async componentDidMount() {
    const response = await fetch("http://localhost:8080/playlist");
    const body = await response.json();
    this.setState({ playlist: body });
  }

  getPlaylistName(play) {
    let same = true;
    play.playlistName === this.props.playlistName ? same = true : same = false;

    return same;
  }

  render() {
    const { playlist } = this.state;
    return (
      <div className="playlistCol">
        <div className="playlistList">
          {playlist.map((play) => (
            <div key={play.songURI}>
              {this.getPlaylistName(play) ?
              <p>
                <div className="playlistSong">
                  {" "}
                  <img
                    src="/images/music-note.png"
                    alt="note"
                    className="musicNote"
                  />{" "}
                  {play.trackName}
                </div>
                <div className="playlistArtist">{play.artistName}</div>
              </p>
              : null
            }
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PlaylistDisplay;
