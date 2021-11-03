import React from "react";

export default function SearchResults(props){

    const displayResults = (props) => {
        const {search} = props;
        
    return(    
        search ? (
            search.map((searchList) => {
              console.log(search);  
              return (
              <li className="text-center" key={searchList.uri}>{"Song title: "}{searchList.name}{' Artist: '}{searchList.artists[0].name}</li>
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