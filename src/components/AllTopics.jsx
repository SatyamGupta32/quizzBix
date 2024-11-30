import React from "react";
import {
  AllTopicsContainer,
  Title,
  TopicsList,
  TopicCategory,
  CategoryLine,
  TopicItem,
  TestItem,
  Link,
  FlexImg,
  Icon,
} from "../styles/AllTopics.styles";
import { Link as RouterLink } from "react-router-dom";
import topics from "../data/topics";

const AllTopics = () => {
  return (
    <AllTopicsContainer>
      <FlexImg>
        <Icon src="/icons/list-icon.svg" alt="List Icon" />
        <Title>All Topics</Title>
      </FlexImg>
      <TopicsList>
        {topics.map((topic, index) => (
          <TopicItem key={index}>
            <FlexImg>
              <Icon src="/icons/list-icon.svg" alt="List Icon" />
              <TopicCategory>{topic.category}</TopicCategory>
            </FlexImg>
            <CategoryLine />
            <TopicsList>
              {topic.items.map((item, idx) => (
                <TestItem key={idx}>
                  <Icon src="/icons/test-icon.svg" alt="Test Icon" />
                  {/* Dynamically generate links */}
                  <RouterLink
                    to={`/topics/${encodeURIComponent(item)}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {item}
                  </RouterLink>
                </TestItem>
              ))}
            </TopicsList>
          </TopicItem>
        ))}
      </TopicsList>
    </AllTopicsContainer>
  );
};

export default AllTopics;
