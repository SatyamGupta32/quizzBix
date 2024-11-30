import React from "react";
import OnlineTests from "./components/OnlineTests";
import AllTopics from "./components/AllTopics";
import './App.css';

const App = () => {
  return (
    <div className="container">
      <OnlineTests />
      <AllTopics />
    </div>
  );
};

export default App;
