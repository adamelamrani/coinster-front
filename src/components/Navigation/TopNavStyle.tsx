import styled from "styled-components";

const TopNavStyle = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0, 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  .navigation-logo {
    width: 100px;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-evenly;
    padding-right: 20px;

    li {
      margin: 10px;
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 450px) {
    .listitem-search-input {
      display: none;
    }
    .listitem-search-icon {
      display: block;
    }
    .cryptos-link a,
    .wallet-link a {
      display: none;
    }
  }

  @media (min-width: 450px) {
    .listitem-search-icon {
      display: none;
    }
    .listitem-search-input {
      display: block;
    }
  }
`;

export default TopNavStyle;
