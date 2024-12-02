import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllTopics from "./components/AllTopics/AllTopics";
import TopicPage from "./components/TopicPage/TopicPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllTopics />} />
        <Route path="/topics/:topicName" element={<TopicPage />} />
      </Routes>
    </Router>
  );
};

export default App;
