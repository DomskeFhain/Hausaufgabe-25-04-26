import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TierList from "./TierList";
import TierDex from "./TierDex";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/tiere" element={<TierList></TierList>}></Route>
        <Route path="/tiere/:id" element={<TierDex></TierDex>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
  </React.StrictMode>
);
