import React from "react";
import "./Homepage.css";
import { Container, Row, Col, RowProps, ColProps } from "react-bootstrap";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-body">
        <Container fluid>
          {/* for now cols and rows are manually generated
            once backend is set up we will do it with a map function */}
          <Row>
            <Col className="text-center">
              <h3>Suggested</h3>
            </Col>
            <Col className="text-center">
              <h3>SoundSource Playlist</h3>
            </Col>
            <Col className="text-center">
              <h3>Search</h3>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              here goes the suggested songs ...
              <Row>
                <Col className="text-center">with new rows </Col>
              </Row>
            </Col>
            <Col className="text-center">
              <ul className="playlist">
                <li>Bad Romance</li>
                <li className="artist">Lady Gaga</li>
                <li>Location</li>
                <li className="artist">Khalid</li>
                <li>Off The Grid</li>
                <li className="artist">Kanye West</li>
                <li>Way 2 Sexy</li>
                <li className="artist">Drake, Future</li>
              </ul>
              <Row>
                <Col className="text-center"> </Col>
              </Row>
            </Col>
            <Col className="text-center">
              here goes the suggested Playlists ...
              <Row>
                <Col className="text-center">with new rows</Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
