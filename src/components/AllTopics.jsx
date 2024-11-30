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

const AllTopics = () => {
  const topics = [
    {
      category: "General Online Tests",
      items: [
        "Online Aptitude Test",
        "Online Verbal Ability Test",
        "Online Logical Reasoning Test",
        "Online Verbal Reasoning Test",
        "Online Non Verbal Reasoning Test",
        "Online Data Interpretation Test",
        "Online General Knowledge Test",
        "Online Current Affairs Test",
      ],
    },
    {
      category: "Programming Online Tests",
      items: [
        "Online C Programming Test",
        "Online C# Programming Test",
        "Online C++ Programming Test",
        "Online Java Programming Test",
      ],
    },
    {
      category: "Technical Online Tests",
      items: [
        "Online Database Test",
        "Online Networking Test",
        "Online Computer Science Test",
      ],
    },
    {
      category: "Engineering Online Tests",
      items: [
        "Online Civil Engineering Test",
        "Online Mechanical Engineering Test",
        "Online Electrical Engineering Test",
        "Online Electronics and Communication Engineering Test",
        "Online Electronics Test",
        "Online Digital Electronics Test",
        "Online Electronic Devices Test",
        "Online Technical Drawing Test",
        "Online Engineering Mechanics Test",
        "Online Chemical Engineering Test",
      ],
    },
    {
      category: "Medical Science Online Tests",
      items: [
        "Online Microbiology Test",
        "Online Biotechnology Test",
        "Online Biochemistry Test",
        "Online Biochemical Engineering Test",
      ],
    },
  ];

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
