import React from "react";

export default function NoResult(props){
    if (props.data !== null && !props.data.length){
        return <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result"><b>No Results Found</b></div>
    }
    return null;
}