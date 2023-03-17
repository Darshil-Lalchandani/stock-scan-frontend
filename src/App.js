import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home/Home";
import Section from "./components/Section/Section";
import ArrayParams from "./components/Params/ArrayParams";
import PeriodParams from "./components/Params/PeriodParams";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/data").then((res) => setData(res.data));
  }, []);

  const routes = useRoutes([
    { path: "/", element: <Home data={data} /> },
    { path: "/top_gainers", element: <Section data={data[0]} /> },
    { path: "/intraday_buying", element: <Section data={data[1]} /> },
    { path: "/open_high", element: <Section data={data[2]} /> },
    { path: "/cci_reversal", element: <Section data={data[3]} /> },
    { path: "/rsi_overbought", element: <Section data={data[4]} /> },
    {
      path: "/open_high_params_1",
      element: <ArrayParams data={data[2]?.criteria[0].variable.$1.values} />,
    },
    {
      path: "/cci_params_1",
      element: (
        <PeriodParams
          header={"CCI"}
          placeholder={data[3]?.criteria[0].variable.$1.default_value}
        />
      ),
    },
    {
      path: "/cci_params_2",
      element: <ArrayParams data={data[3]?.criteria[0].variable.$2.values} />,
    },
    {
      path: "/rsi_params_1",
      element: <ArrayParams data={data[4]?.criteria[0].variable.$1.values} />,
    },
    {
      path: "/rsi_params_2",
      element: <ArrayParams data={data[4]?.criteria[1].variable.$2.values} />,
    },
    {
      path: "/rsi_params_3",
      element: <ArrayParams data={data[4]?.criteria[1].variable.$3.values} />,
    },
    {
      path: "/rsi_params_4",
      element: (
        <PeriodParams
          header={"RSI"}
          placeholder={data[4]?.criteria[2].variable.$4.default_value}
        />
      ),
    },
  ]);

  return <div className="App">{routes}</div>;
}

export default App;
