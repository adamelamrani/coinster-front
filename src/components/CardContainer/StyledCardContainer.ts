import styled from "styled-components";

const StyledCardContainer = styled.table`
  display: flex;
  flex-direction: column;
  background-color: #c4c4c4;

  thead {
    background-color: #6c757d;
    padding-left: 10px;
    padding-right: 10px;
  }

  @media (max-width: 450px) {
    thead {
      display: none;
    }
  }
`;

export default StyledCardContainer;
