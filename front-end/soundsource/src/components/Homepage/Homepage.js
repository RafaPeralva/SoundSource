import React from "react";
import "./Homepage.css";
import { Container, Row, Col } from "react-bootstrap";
import { SearchBar } from "../SearchBar/SearchBar";
import { Suggested } from "../Suggested/Suggested";
import axios from "axios";
import PlaylistDisplay from "../Playlist/PlaylistDisplay";
import Playlist from "../Playlist/Playlist";

// import SearchResults from "../SearchResults/SearchResults";

// const { useEffect } = React;

export const Homepage = () => {
  function exportSuggested() {
    axios.get("http://localhost:8080/suggested").then((response) => {
      if (response.data[0] != null) {
        let count = 0;
        let songString = [];
        for (var i in response.data) {
          songString[count] = "spotify:track:" + response.data[count].id;
          count++;
        }
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
          <Row className="homepageRow">
            <Col className="homepageCol">
              <Row className="title">
                <h3>Suggest:</h3>
              </Row>
              <SearchBar />
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
                <Suggested />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
