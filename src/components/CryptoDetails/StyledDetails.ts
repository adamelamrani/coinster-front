import styled from "styled-components";

const StyledDetails = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: 50px;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  background-color: rgb(24, 41, 88);
  border-radius: 20px;
  height: 600px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

  h1 {
    font-size: 40px;
    margin: 0;
  }

  .buttons-div {
    display: flex;
  }

  .heading-price {
    display: flex;
    flex-direction: column;
  }

  .crypto-logo-img {
    max-width: 100px;
    max-height: 100px;
    border-radius: 50%;
    object-fit: cover;
    background-color: white;
  }

  .img-example {
    margin: 20px;
    max-width: 640px;
    max-height: 368px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }

  .logo-name {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 20px;
    justify-content: space-around;
    align-items: space-around;
    max-width: 660px;
    height: 550px;
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
  }

  article {
    width: 300px;
    height: 300px;
    overflow-y: auto;
  }

  @media (max-width: 450px) {
    position: relative;
    top: 10px;
    display: flex;
    padding-top: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    color: white;
    background-color: none;
    box-shadow: none;
    height: 660px;

    .buttons-div {
      display: flex;
      flex-direction: column;
    }

    div p {
      text-align: right;
    }

    div .img-example {
      margin: 20px;
      width: 300px;
      height: 200px;
      object-fit: contain;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    }

    .logo-name {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin: 20px;
    }

    .crypto-logo-img {
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
      width: 300px;
      height: 200px;
    }
  }
`;

export default StyledDetails;
