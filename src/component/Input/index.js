import React from "react";
import "./style.css";
function Input(props) {
  const { label, placehold, type, value, name } = props;
  return (
    <div className="field">
      <label>{label}</label>
      <input
        placeholder={placehold}
        type={type}
        value={value}
        onChange={(e) => props.onChange(e)}
        name={name}
      />
    </div>
  );
}
export default Input;
