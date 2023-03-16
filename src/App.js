import { Routes, Route } from "react-router-dom";
import Gainers from "./components/Gainers/Gainers";
import Intraday from "./components/Intraday/Intraday";
import OpenHigh from "./components/OpenHigh/OpenHigh";
import RSI from "./components/RSI/RSI";
import CCI from "./components/CCI/CCI";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top_gainers" element={<Gainers />} />
        <Route path="/intraday_buying" element={<Intraday />} />
        <Route path="/open_high" element={<OpenHigh />} />
        <Route path="/cci_reversal" element={<CCI />} />
        <Route path="/rsi_overbought" element={<RSI />} />
      </Routes>
    </div>
  );
}

export default App;
