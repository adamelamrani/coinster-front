import styled from "styled-components";

const StyledDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px;
  width: 70vw;
  h1 {
    font-size: 40px;
    margin: 0;
  }

  ul {
    list-style: none;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 40px;
  }

  .logo-name {
    display: flex;
    flex-direction: row;
    margin: 20px;
  }

  .info-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
  }

  button {
    margin: 20px;
    width: 70px;
    height: 30px;
  }

  article {
    width: 500px;
    height: 70vh;
    overflow-y: auto;
  }

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;

    .logo-name {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin: 20px;

      ul {
        padding: 0;
      }
    }

    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 10px;
    }

    h1 {
      font-size: 20px;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      text-align: center;
    }

    article {
      width: 70vw;
      overflow-y: none;
      height: auto;
    }
  }
`;

export default StyledDetails;
