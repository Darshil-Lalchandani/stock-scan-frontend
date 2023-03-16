import React from "react";

export default function PeriodParams(props) {
  return (
    <>
      <p>{props.header}</p>
      <p>Set Parameters</p>
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          height: 70,
          width: "95%",
          padding: "10px 10px",
        }}
      >
        <span>Period</span>
        <input style={{ float: "right" }} placeholder={props.placeholder} />
      </div>
    </>
  );
}
