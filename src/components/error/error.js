import React from "react";
import "./error.css";

export default function Error(props){
    if (props.show.length){
        return <div className="error">{props.show}</div>
    } else {
        return null;
    }
}