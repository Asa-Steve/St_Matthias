import styled from "styled-components";

const StyledFormRow = styled.div`
  margin-bottom: 0.5rem;
  label {
    display: block;
  }
  input {
    width: 100%;
    height: 40px;
  }
  span {
    width: 100%;
    display: block;
    font-size: var(--f-xxsm);
    color: var(--color-red-700);
  }
  textarea {
    height: 150px;
    width: 100%;
  }

  input,
  textarea {
    padding: 0.5rem 0.2rem;
    border: 1px solid var(--color-grey-200);
    border-radius: 5px;
    resize: none;
  }

  button {
    border: 1px solid;
    height: 40px;
    padding-inline: 1rem;
    background-color: var(--color-primary);
    color: var(--color-grey-0);
    border-radius: 5px;
    &:hover {
      background-color: var(--color-secondary);
      outline: 2px solid var(--color-primary);
      outline-offset: 1px;
    }
  }
`;

const FormRow = ({ children }) => {
  return <StyledFormRow>{children}</StyledFormRow>;
};

export default FormRow;
