import styled from "styled-components";

const StyledCard = styled.tr`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  border-top: 2px solid gray;
  padding: 8px 10px 8px 20px;

  .hide-star {
    display: none;
    visibility: hidden;
    cursor: default;
  }

  .display-star {
    color: yellow;
    cursor: pointer;
  }

  img {
    border-radius: 50%;
    background-color: white;
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

  .price-mobile-block {
    align-items: flex-end;
  }

  @media (max-width: 450px) {
    color: white;

    img {
      background-color: white;
    }
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
