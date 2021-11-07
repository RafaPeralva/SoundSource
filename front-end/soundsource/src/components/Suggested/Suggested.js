import React, { Component } from "react";
import "./Suggested.css";

import axios from "axios";

export class Suggested extends React.component{
    getSuggested = () => {
        let linkToAPI = "http://localhost:8080/suggested";
    
        try {
          let response = await axios.get(linkToAPI);
          console.log(response.data);
        } 
        catch (error) {
          if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            console.log(error.response.data); //Not Found
            console.log(error.response.status); //404
            this.setState({ found: false });
          }
        }
    }
}

window.onload = getSuggested() {
    console.log("Success!");
}


export default Suggested;