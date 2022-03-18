import styled from "styled-components";

const StyledFormular = styled.form`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;

  .first-block,
  .second-block {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-content: space-around;
    input {
      width: 300px;
      height: 30px;
    }
    label,
    input {
      margin: 10px;
    }

    textarea {
      width: 300px;
      height: 300px;
    }

    button {
      height: 40px;
    }
  }
`;
export default StyledFormular;
