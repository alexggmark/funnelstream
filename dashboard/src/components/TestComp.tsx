import styled from 'styled-components';

const Button = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

const TestComp = () => {
  return (
    <div>
      <h1>Styled Components with Next.js</h1>
      <Button>Click Me</Button>
    </div>
  )
}

export default TestComp;
