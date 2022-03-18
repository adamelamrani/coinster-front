import styled from "styled-components";

const StyledBody = styled.body`
  display: flex;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 90vw;

  @media (max-width: 450px) {
    width: 100vw;
  }
`;

export default StyledBody;
