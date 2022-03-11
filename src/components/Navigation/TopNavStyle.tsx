import styled from "styled-components";

const TopNavStyle = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0, 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  svg {
    width: 25px;
    height: 25px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  svg:hover {
    color: red;
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: bolder;
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    color: red;
  }

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

      input {
        width: 300px;
        height: 35px;
        border-radius: 50px;
        border: 2px solid gray;
        box-shadow: rgb(84 84 84) 0 0 10px 0px;
        padding-left: 40px;
      }
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
