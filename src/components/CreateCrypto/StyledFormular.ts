import styled from "styled-components";

const StyledFormular = styled.form`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  width: 700px;
  margin: 10px;

  .form-blocks {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .img-form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 40px;
  }

  .first-block,
  .second-block {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    input,
    textarea {
      width: 300px;
      height: 30px;
    }
    label,
    input,
    textarea {
      margin: 10px;
    }

    button {
      height: 40px;
    }
  }
`;
export default StyledFormular;
