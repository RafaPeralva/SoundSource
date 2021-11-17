import "./Playlist.css";
import React, { useState, useEffect } from 'react';
import axios from "axios";


export const Playlist = () => {
   
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

                let songOne = response.data[response.data.length -1];
                let songOneID = response.data[response.data.length -1].id;

            var url = "http://localhost:8080/playlist";
            fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(songOne),
            }).then((result) => {
            result.json().then((res) => {
            console.warn("res", res);
            });
            });

            fetch('http://localhost:8080/suggested/' + songOneID, {
              method: 'DELETE',
            })
            .then(res => res.text()) // or res.json()
            .then(res => console.log(res))

            window.location.reload();
            }
    
          })
        }, 300000);
    
        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
      }, []);

    return (
      <div>
         {/* <div className="suggested">
          {playlist.map(play =>
            <div key={play.id}>
          <p>
            {play.trackName}<br></br>
            <span>{play.artistName}</span>
          </p>
        </div>
        )}
        </div> */}
      </div>
    );
};

export default Playlist;