import { useRoutes } from "react-router-dom";
import Gainers from "./components/Gainers/Gainers";
import Intraday from "./components/Intraday/Intraday";
import OpenHigh from "./components/OpenHigh/OpenHigh";
import RSI from "./components/RSI/RSI";
import CCI from "./components/CCI/CCI";
import Home from "./components/Home/Home";
import data from "./data";
import "./App.css";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home data={data} /> },
    { path: "/top_gainers", element: <Gainers /> },
    { path: "/intraday_buying", element: <Intraday /> },
    { path: "/open_high", element: <OpenHigh /> },
    { path: "/cci_reversal", element: <CCI /> },
    { path: "/rsi_overbought", element: <RSI /> },
  ]);

  return <div className="App">{routes}</div>;
}

export default App;
