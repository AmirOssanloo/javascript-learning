import React from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  font-size: 0.9rem;
  resize: vertical:
  border: 1px solid ${props => props.theme.veryLightGrey};
  box-sizing: border-box;
`;

export default TextArea;
