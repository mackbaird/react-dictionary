import React, { useState } from "react";

export default function Results(props) {
  if (props.results.length > 0) {
    return (
      <div className="Results">
        <p>{props.results}</p>
      </div>
    );
  } else {
    return null;
  }
}
