import { device } from "@/helpers/mediaQueries";
import styled from "styled-components";

const StyledFormRow = styled.div`
  margin-bottom: 0.5rem;
  label {
    display: block;
  }
  input {
    width: 100%;
    height: 35px;
  }
  span {
    width: 100%;
    display: block;
    font-size: var(--f-xxsm);
    color: var(--color-red-700);
    min-height: 25px;
  }
  textarea {
    height: 120px;
    width: 100%;
    border-block: 1px solid var(--color-grey-200);
  }

  input,
  textarea {
    padding: 0.5rem 0.5rem;
    border-bottom: 1px solid var(--color-grey-300);
    resize: none;

    &::placeholder {
      color: var(--color-grey-400);
      font-size: var(--f-xsm);
    }

    /* Chrome, Safari, Edge, Opera */
    &[type="number"]::-webkit-inner-spin-button,
    &[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Firefox */
    &[type="number"] {
      -moz-appearance: textfield;
    }
  }

  select,
  input[type="date"] {
    border-bottom: 1px solid var(--color-grey-300);
    width: 100%;
    color: var(--color-grey-400);
    padding-inline: 0.5rem;
    height: 35px;

    option {
      font-size: var(--f-xsm);
    }
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

  @media ${device.tablet} {
    span {
      font-size: var(--f-xsm);
    }
  }
`;

const FormRow = ({ children }) => {
  return <StyledFormRow>{children}</StyledFormRow>;
};

export default FormRow;
