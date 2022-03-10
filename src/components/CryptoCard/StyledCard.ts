import styled from "styled-components";

const StyledCard = styled.tr`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  border-top: 2px solid gray;
  padding: 8px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    p {
      margin: 5px;
      text-align: center;
    }
  }

  .crypto-name,
  .crypto-symbol {
    text-align: left;
  }
  td {
    width: 10%;
  }

  .empty {
    width: 35px;
  }

  th {
    width: 10%;
    text-align: right;
  }

  .th-name {
    text-align: center;
  }

  .star-icon {
    color: yellow;
  }
`;

export default StyledCard;
