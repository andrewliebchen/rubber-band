import styled from "styled-components";

const Input = styled.textarea`
  appearance: none;
  border: 0;
  font-size: 1em;
  text-align: center;
  display: block;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export default Input;
