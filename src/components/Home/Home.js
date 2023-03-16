import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home(props) {
  const links = [
    "/top_gainers",
    "/intraday_buying",
    "/open_high",
    "/cci_reversal",
    "/rsi_overbought",
  ];

  return (
    <ul className="home">
      {props.data.map((data, index) => (
        <li key={data.id}>
          <Link to={links[index]}>
            <p> {data.name} </p>
            <small className={data.color === "green" ? "green" : "red"}>
              {data.tag}
            </small>
          </Link>
          <hr />
        </li>
      ))}
    </ul>
  );
}
