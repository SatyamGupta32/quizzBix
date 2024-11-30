import React from "react";
import { useParams } from "react-router-dom";
import {
  TopicPageContainer,
  TopicTitle,
  TopicDescription,
  TopicStrong,
} from "../styles/TopicPage.styles";

const TopicPage = () => {
  const { topicName } = useParams(); // Retrieve the topic name from the URL

  return (
    <TopicPageContainer>
      <TopicTitle>{topicName}</TopicTitle>
      <TopicDescription>
        This is the page for <TopicStrong>{topicName}</TopicStrong>. Add specific
        content for this topic here.
      </TopicDescription>
    </TopicPageContainer>
  );
};

export default TopicPage;
