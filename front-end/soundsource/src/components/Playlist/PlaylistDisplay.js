import React, { Component } from "react";
import "./Playlist.css";


export class PlaylistDisplay extends Component {
    state = {
      playlist: []
    };

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/playlist');
        const body = await response.json();
        this.setState({playlist: body});
      }

      render() {
        const {playlist} = this.state;
          return (
            <div className="playlist">
              {playlist.map(play =>
                <div key={play.id}>
              <p>
                {play.trackName}<br></br>
                <span>{play.artistName}</span>
              </p>
            </div>
            )}
            </div>
              
          );
        }
      }
    
    
    
    export default PlaylistDisplay;
  