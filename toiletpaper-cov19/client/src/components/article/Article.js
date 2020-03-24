import React from 'react';
import styled from 'styled-components';
import theme from '#styles/theme';

const ArticleContainer = styled.div`
  padding: 0 5rem;
`;

export const ArticleTitle = styled.h1`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto 5rem auto;
  padding-bottom: 3rem;
  border-bottom: 4px solid ${theme.brand.primary};
`;


const Article = ({ title, children }) => {
  return (
    <ArticleContainer>
      <ArticleTitle>{title}</ArticleTitle>
      {children}
    </ArticleContainer>
  );
};

export default Article;
