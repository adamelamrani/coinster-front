import styled from "styled-components";

const StyledCard = styled.tr`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  border-top: 2px solid gray;
  padding: 15px;

  td {
    width: 10%;
  }

  .star-icon {
    color: yellow;
  }
`;

export default StyledCard;
