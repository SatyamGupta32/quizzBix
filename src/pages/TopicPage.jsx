import React from "react";
import { useParams } from "react-router-dom";
import {
  TopicPageContainer,
  TopicTitle,
  TopicDescription,
  TopicStrong,
} from "../styles/TopicPage.styles";
import { CategoryLine } from "../styles/AllTopics.styles";

const TopicPage = () => {
  const { topicName } = useParams();
  const decodedTopicName = decodeURIComponent(topicName);

  return (
    <TopicPageContainer>
      {" "}
      <TopicTitle>{decodedTopicName}</TopicTitle>
      <CategoryLine />
      <TopicDescription>
        This is the page for <TopicStrong>{decodedTopicName}</TopicStrong>. Add
        specific content for this topic here.
      </TopicDescription>
    </TopicPageContainer>
  );
};

export default TopicPage;
