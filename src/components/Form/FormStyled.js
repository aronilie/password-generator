import styled from "styled-components";

const FormStyled = styled.div`
  max-width: 100%;
  max-height: 100%;
  padding: 1em;
  background-color: #1c6758;

  .input-container {
    width: 100%;
    margin: 0;
  }

  .generated-password {
    width: 100%;
    height: 3em;
    font-size: 1em;
    color: #fff;
    background-color: #3d8361;
    border: none;
    padding: 0 0.5em;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }

  .inputs-container {
    display: flex;
    justify-content: space-between;
  }

  .range-container {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  .input-text {
    color: #eef2e6;
  }

  .slider-value {
    color: #eef2e6;
  }
`;

export default FormStyled;
