import React from "react";
import "./Homepage.css";
import { Container, Row, Col, RowProps, ColProps } from "react-bootstrap";
import { SearchBar } from "../SearchBar/SearchBar";
import { Suggested } from "../Suggested/Suggested";
import axios from "axios";

// import SearchResults from "../SearchResults/SearchResults";

const { useEffect } = React;

export const Homepage = () => {
  const MINUTE_MS = 60000; // Every min
  // const MINUTE_MS = 600000; // Every 10 min

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Logs every minute");
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  function exportPlaylist() {
    axios.get("http://localhost:8080/suggested").then((response) => {
      if (response.data[0] != null) {
        let count = 0;
        let songString = [];
        for (var i in response.data) {
          songString[count] = "spotify:track:" + response.data[count].id;
          count++;
        }
        let linkToAPI =
          "http://localhost:8080/api/exportPlaylist?q=" + songString;
        axios.get(linkToAPI).then((response) => {});
      }
    });
  }

  function playPlaylist() {
    axios.get("http://localhost:8080/suggested").then((response) => {
      if (response.data[0] != null) {
        let count = 0;
        let songString = [];
        for (var i in response.data) {
          songString[count] = "spotify:track:" + response.data[count].id;
          count++;
        }
        let linkToAPI = "http://localhost:8080/api/play?q=" + songString;
        axios.get(linkToAPI).then((response) => {});
      }
    });
  }

  return (
    <div className="homepage">
      <div className="homepage-body">
        <Container fluid>
          {/* for now cols and rows are manually generated
            once backend is set up we will do it with a map function */}
          <Row>
            <Col className="text-center">
              <h3>SoundSource Playlist</h3>
            </Col>
            <Col className="text-center">
              <h3 className="suggested-btn">
                Suggested
                <button className="exportButton" onClick={exportPlaylist}>
                  <img
                    src="/images/export.png"
                    alt="Export Button"
                    width="30px"
                  />
                </button>
                <button className="playButton" onClick={playPlaylist}>
                  <img src="/images/play.png" alt="Play Button" width="30px" />
                </button>
              </h3>
            </Col>
            <Col className="text-center">
              {" "}
              <h3>Search Songs:</h3>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <div className="playlist">
                <ul className="playlistList">
                  <li className="playlist-song">Bad Romance</li>
                  <li className="playlistArtist">by Lady Gaga</li>
                  <li className="playlist-song">Numb / Encore</li>
                  <li className="playlistArtist">by JAY-Z, Linkin Park</li>
                  <li className="playlist-song">Off The Grid</li>
                  <li className="playlistArtist">by Kanye West</li>
                  <li className="playlist-song">Way 2 Sexy</li>
                  <li className="playlistArtist">by Drake, Future</li>
                </ul>
              </div>
            </Col>
            <Col className="text-center">
              <ul className="suggested">
                <Suggested />
              </ul>
            </Col>
            <Col className="text-center">
              <SearchBar />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
