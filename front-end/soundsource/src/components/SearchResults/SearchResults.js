import React from "react";

export default function SearchResults(props){

    const displayResults = (props) => {
        const {search} = props;
        
    return(    
        search ? (
            search.map((searchList) => {
              console.log(search);  
              return (
              <div className="text-center" key={searchList.uri}>
              <li>{"Song title: "}{searchList.name}</li>
              <p>{'Artist: '}{searchList.artists[0].name}</p>
              </div>
              )
            })
          ) : (
            <h3></h3>
          )
    )
    }

    return(
        <div> 
        {displayResults(props)}
        </div>
    )
}