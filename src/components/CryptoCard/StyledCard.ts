import styled from "styled-components";

const StyledCard = styled.tr`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  border-top: 2px solid gray;
  padding: 8px;
  padding-left: 10px;
  padding-right: 10px;

  .star-icon,
  .cross-icon {
    cursor: pointer;
  }
  img {
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    p {
      margin: 5px;
      text-align: center;
    }

    .percent-mobile {
      display: none;
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
    color: white;
  }

  .th-name {
    text-align: center;
  }

  .star-icon {
    color: yellow;
    margin-left: 10px;
  }
  .price-mobile-block {
    align-items: flex-end;
  }

  @media (max-width: 450px) {
    justify-content: left;

    img {
      margin: 10px;
    }

    td {
      width: 40%;
    }

    .price-mobile {
      display: block;
    }

    .crypto-price,
    .crypto-change24,
    .crypto-change7d,
    .crypto-marketcap,
    .crypto-maxsupply {
      display: none;
    }
  }
`;

export default StyledCard;
