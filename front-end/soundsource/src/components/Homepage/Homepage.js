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
  return (
    <div className="homepage">
      <div className="homepage-body">
        <Container fluid>
          <Row>
            <Col>
              <SearchBar />
            </Col>
          </Row>
          <Row>row</Row>
        </Container>
      </div>
    </div>
  );
};
