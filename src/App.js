import { useRoutes } from "react-router-dom";
import Home from "./components/Home/Home";
import Section from "./components/Section/Section";
import data from "./data";
import "./App.css";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home data={data} /> },
    { path: "/top_gainers", element: <Section data={data[0]} /> },
    { path: "/intraday_buying", element: <Section data={data[1]} /> },
    { path: "/open_high", element: <Section data={data[2]} /> },
    { path: "/cci_reversal", element: <Section data={data[3]} /> },
    { path: "/rsi_overbought", element: <Section data={data[4]} /> },
  ]);

  return <div className="App">{routes}</div>;
}

export default App;
