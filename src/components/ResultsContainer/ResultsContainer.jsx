import React from "react";
import "./ResultsContainer.css"
import NameCard from "../NameCard/NameCard";

const Results=({suggestedNames})=>{
    const suggestedNameJSX=suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName}/>;
    });
    return(
        <div className="result">{suggestedNameJSX}
        </div>
    );

};
export default Results