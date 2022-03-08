import styled from "styled-components";

const TopNavStyle = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0, 20px;

  .navigation-logo {
    width: 100px;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-evenly;

    li {
      margin: 10px;
    }
  }

  @media (max-width: 450px) {
    .listitem-search-input {
      display: none;
    }
    .listitem-search-icon {
      display: block;
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
