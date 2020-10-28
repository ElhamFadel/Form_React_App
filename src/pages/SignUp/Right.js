import React from "react";
import Logo from "../../component/Logo";
import Qoute from "../../component/Qoute";
import Square from "../../component/Square";
import Group from "../../img/Group.png";
import "./style.css";
function Right() {
  return (
    <aside
      className="rightSide"
      style={{
        width: "50%",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${Group})`,
          width: "50%",
          position: "absolute",
          "background-size": " 40rem 39rem",
          height: "36.1rem"
        }}
      >
       
        <Logo size="small" />
        <Qoute />
        <Square />
      </div>
    </aside>
  );
}
export default Right;
