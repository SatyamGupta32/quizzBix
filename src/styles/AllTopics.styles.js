import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const AllTopicsContainer = styled.div`
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 1.5rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  margin: 0 auto;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 400;
`;

export const TopicsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TopicCategory = styled.h3`
  font-size: 18px;
  color: #333;
`;

export const CategoryLine = styled.div`
  width: 100%;
  height: 1px;
  background: #969696;
`;

export const TopicItem = styled.li`
  margin-bottom: 30px;
`;

export const TestItem = styled.li`
  display: flex;
  gap: 10px;
  margin: 24px 0 24px 24px;
`;

export const StyledLink = styled(RouterLink)`
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const FlexImg = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Icon = styled.img`
  width: 20px;
  height: auto;
`;
