import styled from "styled-components";

const StyledCardContainer = styled.table`
  display: flex;
  flex-direction: column;
  background-color: #c4c4c4;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  border-radius: 15px;

  thead {
    background-color: #6c757d;
    padding-left: 10px;
    padding-right: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  @media (max-width: 450px) {
    thead {
      display: none;
    }

    tr:first-child {
      border-top: none;
    }
  }
`;

export default StyledCardContainer;
