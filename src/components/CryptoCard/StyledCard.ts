import styled from "styled-components";

const StyledCard = styled.tr`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  border-top: 2px solid gray;
  padding: 8px 10px 8px 20px;
  font-size: 14px;

  .hide-star {
    visibility: hidden;
    cursor: none;
  }

  .display-star {
    color: yellow;
    cursor: pointer;
  }

  img {
    border-radius: 50%;
    background-color: white;
    object-fit: cover;
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

    .price-mobile {
      display: none;
    }
  }

  @media (max-width: 450px) {
    color: white;
    padding: 8px 10px 8px 10px;

    img {
      background-color: white;
    }
    justify-content: left;

    img,
    .display-star {
      margin: 10px;
    }

    td {
      width: 40%;
    }

    .price-mobile-block {
      .price-mobile {
        display: block;
      }
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
