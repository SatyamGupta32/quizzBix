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
import topics from "./data/topics";

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
                  <Link href="#">{item}</Link>
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
