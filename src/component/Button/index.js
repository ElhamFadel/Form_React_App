import React from "react";
import "./style.css";
function Button(props) {
  return <button style={props.style}>{props.children}</button>;
}
export default Button;
