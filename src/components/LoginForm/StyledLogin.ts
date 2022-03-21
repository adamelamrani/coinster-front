import styled from "styled-components";

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 50px;

  button {
    margin: 20px;
  }

  h2 {
    margin: 0;
    margin-left: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    .login-section {
      width: 600px;
      height: 400px;
      border-radius: 20px;
      padding: 20px;
      box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
      background-color: rgb(24, 41, 88);
    }
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 10px;

      a {
        color: white;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px;

        label {
          margin: 15px;
        }
      }

      input {
        width: 250px;
        height: 30px;
      }
    }
  }

  @media (max-width: 450px) {
    margin: 20px;
    position: relative;
    top: 50px;

    form .login-section {
      width: 300px;
    }
  }
`;

export default StyledLogin;
