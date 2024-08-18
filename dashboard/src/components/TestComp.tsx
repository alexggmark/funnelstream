"use client";
import styled from 'styled-components';
import theme from '../styles/theme';

const ButtonComp = styled.button`
  background-color: ${theme.colors.primary};
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

const TestComp = () => {
  return (
    <div>
      <ButtonComp>Click Me</ButtonComp>
    </div>
  )
}

export default TestComp;
