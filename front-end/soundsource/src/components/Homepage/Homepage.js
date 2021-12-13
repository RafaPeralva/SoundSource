import React, { useState } from "react";
import "./Homepage.css";
import { Container, Row, Col } from "react-bootstrap";
import { SearchBar } from "../SearchBar/SearchBar";
import Suggested from "../Suggested/Suggested";
import axios from "axios";
import PlaylistDisplay from "../Playlist/PlaylistDisplay";
import Playlist from "../Playlist/Playlist";

export const Homepage = () => {
  const [playlistName, setPlaylistName] = useState("General");

  function exportSuggested() {
    axios.get("http://localhost:8080/suggested").then((response) => {
      if (response.data[0] != null) {
        let count = 0;
        let songString = [];
        for (var i in response.data) {
          if (response.data[i].playlistName === playlistName) {
            songString[count] = "spotify:track:" + response.data[i].trackURI;
            count++;
          }
        }
        songString[count] = playlistName;
        let linkToAPI =
          "http://localhost:8080/api/exportSuggested?q=" + songString;
        axios.get(linkToAPI).then((response) => {});
      }
    });
  }

  function playSuggested() {
    axios.get("http://localhost:8080/suggested").then((response) => {
      if (response.data[0] != null) {
        let count = 0;
        let songString = [];
        for (var i in response.data) {
          if (response.data[i].playlistName === playlistName) {
            songString[count] = "spotify:track:" + response.data[i].trackURI;
            count++;
          }
        }
        let linkToAPI = "http://localhost:8080/api/play?q=" + songString;
        axios.get(linkToAPI).then((response) => {});
      }
    });
  }

  function exportPlaylist() {
    axios.get("http://localhost:8080/playlist").then((response) => {
      if (response.data[0] != null) {
        let count = 0;
        let songString = [];
        for (var i in response.data) {
          if (response.data[i].playlistName === playlistName) {
            songString[count] = "spotify:track:" + response.data[i].trackURI;
            count++;
          }
        }
        songString[count] = playlistName;
        let linkToAPI =
          "http://localhost:8080/api/exportPlaylist?q=" + songString;
        axios.get(linkToAPI).then((response) => {});
      }
    });
  }

  function playPlaylist() {
    axios.get("http://localhost:8080/playlist").then((response) => {
      if (response.data[0] != null) {
        let count = 0;
        let songString = [];
        for (var i in response.data) {
          if (response.data[i].playlistName === playlistName) {
            songString[count] = "spotify:track:" + response.data[i].trackURI;
            count++;
          }
        }
        let linkToAPI = "http://localhost:8080/api/play?q=" + songString;
        axios.get(linkToAPI).then((response) => {});
      }
    });
  }

  const handleSetPlaylistName = (playlistName) => {
    console.log(playlistName);
    setPlaylistName(playlistName);
  };

  return (
    <div className="homepage">
      <div className="homepage-body">
        <Container fluid>
          <Row className="homepageRow">
            <Col className="homepageCol">
              <Row className="search-title">
                <h3>Suggest:</h3>
              </Row>
              <SearchBar
                playlistName={playlistName}
                handleSetPlaylistName={handleSetPlaylistName}
              />
            </Col>
            <Col className="homepageCol">
              <Row className="title">
                <h3 className="suggested-btn">
                  Vote
                  <button className="exportButton" onClick={exportSuggested}>
                    <img
                      src="/images/export.png"
                      alt="Export Button"
                      width="30px"
                    />
                  </button>
                  <button className="playButton" onClick={playSuggested}>
                    <img
                      src="/images/play.png"
                      alt="Play Button"
                      width="30px"
                    />
                  </button>
                </h3>
              </Row>
              <Row>
                <Suggested playlistName={playlistName} />
              </Row>
            </Col>
            <Col className="homepageCol">
              <Row className="title">
                <h3>
                  Playlist
                  <button className="exportButton" onClick={exportPlaylist}>
                    <img
                      src="/images/export.png"
                      alt="Export Button"
                      width="30px"
                    />
                  </button>
                  <button className="playButton" onClick={playPlaylist}>
                    <img
                      src="/images/play.png"
                      alt="Play Button"
                      width="30px"
                    />
                  </button>
                </h3>
              </Row>
              <Row>
                <PlaylistDisplay playlistName={playlistName} />
                <Playlist />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
