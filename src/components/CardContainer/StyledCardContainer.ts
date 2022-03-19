import styled from "styled-components";

const StyledCardContainer = styled.table`
  display: flex;
  flex-direction: column;
  background-color: rgb(24, 41, 88);
  color: white;
  margin: 20px;
  width: 90vw;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  border-radius: 15px;

  button {
    background-color: #1e3379;
    width: 100px;
    height: 30px;
    border-radius: 20px;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }

  tr:first-child {
    border-top: none;
  }

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
  }
`;

export default StyledCardContainer;
