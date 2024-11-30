import React from "react";
import { useParams } from "react-router-dom";

const TopicPage = () => {
  const { topicName } = useParams(); // Retrieve the topic name from the URL

  return (
    <div style={{ padding: "20px" }}>
      <h1>{topicName}</h1>
      <p>
        This is the page for <strong>{topicName}</strong>. Add specific content
        for this topic here.
      </p>
    </div>
  );
};

export default TopicPage;
