import styled from "styled-components";

const StyledDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px;
  background-color: rgb(24, 41, 88);
  border-radius: 20px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

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
    background-color: white;
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
    height: 60vh;
    overflow-y: auto;
  }

  @media (max-width: 450px) {
    display: flex;
    padding-top: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    color: white;
    background-color: none;
    box-shadow: none;

    .logo-name {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
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
      background-color: white;
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
