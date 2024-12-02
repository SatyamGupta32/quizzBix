import React from "react";
import {
  AllTopicsContainer,
  Title,
  TopicsList,
  TopicCategory,
  CategoryLine,
  TopicItem,
  TestItem,
  StyledLink,
  FlexImg,
  Icon,
} from "./AllTopics.styles";
import topics from "../../data/topics";

const AllTopics = () => {
  return (
    <AllTopicsContainer>
      <FlexImg>
        <Icon src="/list-icon.svg" alt="List Icon" />
        <Title>All Topics</Title>
      </FlexImg>
      <TopicsList>
        {topics.map((topic, index) => (
          <TopicItem key={index}>
            <FlexImg>
              <Icon src="/list-icon.svg" alt="List Icon" />
              <TopicCategory>{topic.category}</TopicCategory>
            </FlexImg>
            <CategoryLine />
            <TopicsList>
              {topic.items.map((item, idx) => (
                <TestItem key={idx}>
                  <Icon src="/test-icon.svg" alt="Test Icon" />
                  <StyledLink to={`/topics/${encodeURIComponent(item)}`}>
                    {item}
                  </StyledLink>
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
