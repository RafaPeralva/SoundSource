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
              <h3>Suggest Songs:</h3>
              <SearchBar />
            </Col>
            <Col className="homepageCol">
              <h3>Vote</h3>
              <Suggested />
            </Col>
          </Row>
          <Row>row</Row>
        </Container>
      </div>
    </div>
  );
};
