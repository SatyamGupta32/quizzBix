import styled from "styled-components";

export const TopicPageContainer = styled.div`
  padding: 20px;
  font-family: "Segoe UI", sans-serif;
  @media (max-width: 768px){
    padding: 10px;
  }
`;

export const TopicTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;

  @media (max-width: 768px){
    font-size: 18px;
   }
`;

export const CategoryLine = styled.div`
  width: 100%;
  height: 1px;
  background: #969696;
`;

export const TopicDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;

  @media (max-width: 768px){
    font-size: 14px;
  }
`;

export const TopicStrong = styled.strong`
  font-weight: bold;
`;
