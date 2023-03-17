import React from "react";
import Variable from "../Variable/Variable";

export default function Section(props) {
  return (
    <>
      <div className="section-header">
        <header>{props?.data?.name}</header>
        <small className={props?.data?.color === "green" ? "green" : "red"}>
          {props?.data?.tag}
        </small>
      </div>
      <div className="section-criteria">
        {props?.data?.criteria?.map((ele, index) => (
          <>
            {ele.type === "plain_text" && <p key={index}>{ele.text}</p>}
            {ele.type === "variable" && (
              <Variable data={ele} section={props?.data?.name} />
            )}
            {index !== props?.data?.criteria?.length - 1 && (
              <small> and </small>
            )}
          </>
        ))}
      </div>
    </>
  );
}
