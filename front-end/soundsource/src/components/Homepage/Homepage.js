import React from "react";
import "./Homepage.css";
import { Container, Row, Col, RowProps, ColProps } from "react-bootstrap";
import {SearchBar} from "../SearchBar/SearchBar";
import {Suggested} from "../Suggested/Suggested";

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
              <h3>Suggested</h3>
            </Col>
            <Col className="text-center">
              {" "}
              <h3>Search Songs:</h3>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <ul className="playlist">
                <li>Bad Romance</li>
                <li className="playlistArtist">Lady Gaga</li>
                <li>Numb / Encore</li>
                <li className="playlistArtist">JAY-Z, Linkin Park</li>
                <li>Off The Grid</li>
                <li className="playlistArtist">Kanye West</li>
                <li>Way 2 Sexy</li>
                <li className="playlistArtist">Drake, Future</li>
              </ul>
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
