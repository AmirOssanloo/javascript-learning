import styled from 'styled-components';

const TextInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.25rem;
  font-size: 0.9rem;
  border: 1px solid ${props => props.theme.veryLightGrey}
  box-sizing: border-box;
`;

export default TextInput;
