import React from "react";
import "./Home.css";

export default function Home(props) {
  return (
    <ul className="home">
      {props.data.map((data) => (
        <li key={data.id}>
          <p> {data.name} </p>
          <small className={data.color === "green" ? "green" : "red"}>
            {data.tag}
          </small>
          <hr />
        </li>
      ))}
    </ul>
  );
}
