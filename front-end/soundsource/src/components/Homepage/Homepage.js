import React from "react";
import "./Homepage.css";
import { Container, Row, Col, RowProps, ColProps } from "react-bootstrap";
import { SearchBar } from "../SearchBar/SearchBar";

export const Homepage = () => {
  function upvote() {
    console.log("Upvoted Song");
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
              <h3>Suggested</h3>
            </Col>
            <Col className="text-center">
              <SearchBar />
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
              {/* <Row>
                <Col className="text-center">with new rows </Col>
              </Row> */}
            </Col>

            <Col className="text-center">
            <ul className="suggested">
                <li><button className = "upvote" onClick={upvote}>
                  <img src="/images/upvote.png" alt="Upvote Button" width = "20"/></button>Infinity (888)</li>
                <li className="suggestedArtist">XXXTENTACION, Joey Bada$$</li>
                <li><button className = "upvote" onClick={upvote}>
                  <img src="/images/upvote.png" alt="Upvote Button" width = "20"/></button>OKRA</li>
                <li className="suggestedArtist">Tyler, The Creator</li>
                <li><button className = "upvote" onClick={upvote}>
                  <img src="/images/upvote.png" alt="Upvote Button" width = "20"/></button>i n t e r l u d e</li>
                <li className="suggestedArtist">J. Cole</li>
                <li><button className = "upvote" onClick={upvote}>
                  <img src="/images/upvote.png" alt="Upvote Button" width = "20"/></button>Babydoll</li>
                <li className="suggestedArtist">Dominic Fike</li>
              </ul>
              {/* <Row>
                <Col className="text-center">with new rows </Col>
              </Row> */}
            </Col>
            <Col className="text-center">
            {/* <ul className="search">
                <li className="searchSong">Location<br />
                <span className="playlistArtist">Khalid</span></li>
                <li className="searchSong">Location<br />
                <span className="playlistArtist">Playboi Carti</span></li>
                <li className="searchSong">Sharing Locations<br />
                <span className="playlistArtist">Meek Mill, Lil Durk, Lil Baby</span></li>
                <li className="searchSong">Location<br />
                <span className="playlistArtist">Dave,Burna Boy</span></li>
              </ul> */}
              
              {/*<Row>
                <Col className="text-center">with new rows</Col>
              </Row>*/}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
