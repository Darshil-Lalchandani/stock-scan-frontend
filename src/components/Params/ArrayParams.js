import React from "react";

export default function ArrayParams(props) {
  props?.data?.sort();
  return (
    <div>
      {props?.data?.map((ele, index) => (
        <div key={index}>
          <p>{ele}</p>
          <hr style={{ borderStyle: "dotted" }} />
        </div>
      ))}
    </div>
  );
}
