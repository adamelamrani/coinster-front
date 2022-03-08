import styled from "styled-components";

const TopNavStyle = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-evenly;
  }

  .listitem-search {
    input {
      display: none;
    }
  }

  @media (min-width: 500px) {
    .listitem-search {
      p {
        display: none;
      }
      input {
        display: flex;
      }
    }
  }
`;

export default TopNavStyle;