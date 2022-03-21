import styled from "styled-components";

const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  height: 480px;
  width: 300px;
  border-radius: 20px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  background-color: rgb(24, 41, 88);
  justify-content: space-evenly;
  position: relative;
  top: 50px;

  h2 {
    font-size: 20px;
    text-align: center;
  }
  a {
    color: white;
  }

  p {
    font-size: 16px;
    text-align: center;
  }

  button {
    margin: 20px;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 250px;
      height: 30px;
      margin: 10px;
    }
  }
  @media (min-width: 450px) {
    width: 500px;
    height: 500px;
  }
`;

export default StyledRegister;
