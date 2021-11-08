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
      axios.get("http://localhost:8080/suggested").then((response) => {

          if(response.data[0] != null) {

            console.log(response.data);
            
            let firstTrack = "";
            let firstId = "";

            let secondTrack = "";
            let secondId = "";

            let thirdTrack = "";
            let thirdId = "";

            response.data.sort(function(a, b){
              return a.upvoteCount - b.upvoteCount;
            })
            
            if(response.data[response.data.length - 1] != null) {
              firstTrack = response.data[response.data.length - 1].trackName;
              firstId = response.data[response.data.length - 1].id;
            }

            if(response.data[response.data.length - 2] != null) {
              secondTrack = response.data[response.data.length - 2].trackName;
              secondId = response.data[response.data.length - 2].id;
            }

            if(response.data[response.data.length - 3] != null) {
              thirdTrack = response.data[response.data.length - 3].trackName;
              thirdId = response.data[response.data.length - 3].id;
            }
            
            console.log("First Voted Song: " + firstTrack + " - " + firstId);
            console.log("Second Voted Song: " + secondTrack + " - " + secondId);
            console.log("Third Voted Song: " + thirdTrack + " - " + thirdId);
        }

      })
    }, 20000);

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
    axios.get('http://localhost:8080/suggested')
    .then(response => {
      if(response.data[0] != null) {
        let count = 0;
        let songString = [];
        for(var i in response.data)
        {
          songString[count] = "spotify:track:" + response.data[count].id;
          count++;
        }
        let linkToAPI = "http://localhost:8080/api/play?q=" + songString;
        axios.get(linkToAPI)
        .then(response => {})
      }
    })
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
              <h3>
                Suggested
                <button className="exportButton" onClick={exportPlaylist}>
                  <img
                    src="/images/export.png"
                    alt="Export Button"
                    width="40"
                  />
                </button>
                <button className="playButton" onClick={playPlaylist}>
                  <img src="/images/play.png" alt="Play Button" width="40" />
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
