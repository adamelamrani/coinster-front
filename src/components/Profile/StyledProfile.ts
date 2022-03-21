import styled from "styled-components";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 50px;
  border-radius: 20px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  background-color: rgb(24, 41, 88);
  height: 450px;

  .form-container {
    display: flex;
    flex-direction: row;
  }

  h2 {
    font-size: 20px;
    text-justify: center;
    text-align: center;
    margin: 0, 0, 10px, 0;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 350px;
    justify-content: space-between;

    h3 {
      font-size: 16px;
      margin: 10px, 0px;
    }
    p {
      font-size: 16px;
      width: 160px;
      margin: 0;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 15px;

      input {
        width: 250px;
        height: 30px;
      }
    }

    .new-crypto {
      display: flex;
      margin: 0;
    }

    .section-header {
      justify-content: flex-start;
    }
  }
  @media (max-width: 450px) {
    form,
    h2 {
      width: 100%;
    }
  }
`;

export default StyledProfile;
