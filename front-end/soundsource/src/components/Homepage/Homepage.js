import React from "react";
import "./Homepage.css";
import { Container, Row, Col, RowProps, ColProps } from "react-bootstrap";
import {SearchBar} from "../SearchBar/SearchBar";
import {Suggested} from "../Suggested/Suggested";
// import SearchResults from "../SearchResults/SearchResults";

const {useEffect} = React;
const {useState} = React;

export const Homepage = () => {
  
  const[songOne, setSongOne] = useState(0);
  const[songTwo, setSongTwo] = useState(0);
  const[songThree, setSongThree] = useState(0);
  const[songFour, setSongFour] = useState(0);

  
  const MINUTE_MS = 60000; // Every min
  // const MINUTE_MS = 600000; // Every 10 min

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Logs every minute');
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])

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
            
            {/* <Col className = "counter" xs = {1}>
              <h4 className = "counterNum"> {songOne} </h4>
              <h4 className = "counterNum"> {songTwo} </h4>
              <h4 className = "counterNum"> {songThree} </h4>
              <h4 className = "counterNum"> {songFour} </h4>
            </Col> */}

            <Col className="text-center">
            <ul className="suggested">
            <Suggested />
                
                {/* <li><button className = "upvote" onClick={() => setSongOne(songOne + 1)}>
                  <img src="/images/upvote.png" alt="Upvote Button" width = "20"/></button>Infinity (888)</li>
                <li className="suggestedArtist">XXXTENTACION, Joey Bada$$</li>
                <li><button className = "upvote" onClick={() => setSongTwo(songTwo + 1)}>
                  <img src="/images/upvote.png" alt="Upvote Button" width = "20"/></button>OKRA</li>
                <li className="suggestedArtist">Tyler, The Creator</li>
                <li><button className = "upvote" onClick={() => setSongThree(songThree + 1)}>
                  <img src="/images/upvote.png" alt="Upvote Button" width = "20"/></button>i n t e r l u d e</li>
                <li className="suggestedArtist">J. Cole</li>
                <li><img src="/images/upvote.png" alt="Upvote Button" width = "20"/></button>Babydoll</li>
                <li className="suggestedArtist">Dominic Fike</li> */}
              </ul>
              {/* <Row>
                <Col className="text-center">with new rows </Col>
              </Row> */}
            </Col>
            <Col className="text-center">
              <SearchBar />
              {/* <SearchResults /> */}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
