import React from "react";
import "./style.css";
function Checkbox(props) {
  const { name, checked } = props;
  return (
    <div className="checkbox">
      <input type="checkbox" name={name} checked={checked} /> {props.children}
    </div>
  );
}
export default Checkbox;
