// import React from "react";
// import "./PlaylistsPage.css";
// import { Container, Row, Col } from "react-bootstrap";
// import axios from "axios";
// import PlaylistDisplay from "../Playlist/PlaylistDisplay";
// import Playlist from "../Playlist/Playlist";

// // export const PlaylistsPage = () => {
// //   function exportPlaylist() {
// //     axios.get("http://localhost:8080/playlist").then((response) => {
// //       if (response.data[0] != null) {
// //         let count = 0;
// //         let songString = [];
// //         for (var i in response.data) {
// //           songString[count] = "spotify:track:" + response.data[count].id;
// //           count++;
// //         }
// //         let linkToAPI =
// //           "http://localhost:8080/api/exportPlaylist?q=" + songString;
// //         axios.get(linkToAPI).then((response) => {});
// //       }
// //     });
// //   }

// //   function playPlaylist() {
// //     axios.get("http://localhost:8080/playlist").then((response) => {
// //       if (response.data[0] != null) {
// //         let count = 0;
// //         let songString = [];
// //         for (var i in response.data) {
// //           songString[count] = "spotify:track:" + response.data[count].id;
// //           count++;
// //         }
// //         let linkToAPI = "http://localhost:8080/api/play?q=" + songString;
// //         axios.get(linkToAPI).then((response) => {});
// //       }
// //     });
// //   }

//   return (
//     <div className="homepage">
//       <div>
//         <Container fluid>
//           <Row>
//             <Col>
//               <Row>
//                 <div className="playlists">
//                   <h3 className="title">
//                     Playlist
//                     <button className="exportButton" onClick={exportPlaylist}>
//                       <img
//                         src="/images/export.png"
//                         alt="Export Button"
//                         width="30px"
//                       />
//                     </button>
//                     <button className="playButton" onClick={playPlaylist}>
//                       <img
//                         src="/images/play.png"
//                         alt="Play Button"
//                         width="30px"
//                       />
//                     </button>
//                   </h3>
//                 </div>
//               </Row>
//               <Row>
//                 <div className="playlists">
//                   <PlaylistDisplay />
//                   <Playlist />
//                 </div>
//               </Row>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// };
