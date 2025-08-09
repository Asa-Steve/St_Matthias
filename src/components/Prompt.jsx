import styled, { css } from "styled-components";
import MiniSpinner from "./MiniSpinner";
import { device } from "@/helpers/mediaQueries";

const StyledPrompt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  min-height: 300px;
  width: 100%;
  background-color: var(--color-grey-0);

  @media ${device.tablet} {
    min-width: 500px;
  }
  @media ${device.desktop} {
    width: 600px;
  }
`;

const PromptText = styled.h2`
  text-align: center;
  max-width: 80%;
  margin-inline: auto;

  @media ${device.desktop} {
    font-size: var(--f-lg);
    max-width: 85%;
  }
`;
const SubText = styled.p`
  border: 1px solid;
  font-size: var(--f-xxsm);
  text-align: center;
  background-color: var(--color-red-200);
  color: var(--color-grey-0);
  font-style: italic;

  @media ${device.desktop} {
    font-size: var(--f-sm);
    margin-top: 1rem;
  }
`;

const BtnWrap = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  button {
    height: 40px;
    border: 1px solid var(--color-grey-300);
    width: 40%;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    ${(props) =>
      props.propmttype === "success"
        ? css`
            &:nth-of-type(2) {
              background-color: var(--color-green-700);
              color: var(--color-grey-0);

              &:hover {
                background-color: var(--color-green-100);
                color: initial;
                border-color: var(--color-secondary);
              }
            }
          `
        : css`
            &:nth-of-type(2) {
              background-color: var(--color-red-700);
              color: var(--color-grey-0);

              &:hover {
                background-color: var(--color-red-200);
                color: initial;
                border-color: var(--color-secondary);
              }
            }
          `}

    &:nth-of-type(1) {
      background-color: var(--color-grey-100);

      &:hover {
        background-color: var(--color-secondary);
        color: var(--color-grey-0);
      }
    }
  }

  @media ${device.desktop} {
    font-size: var(--f-md);
  }
`;
const Prompt = ({
  cancel,
  proceed,
  loading = false,
  promptText = "Are you sure you want to proceed ?",
  promptType = "success",
  subText = "kindly note that this action may or may not be reversible ",
  btnText = "proceed",
}) => {
  return (
    <StyledPrompt>
      <div>
        <PromptText>{promptText}</PromptText>
        <SubText>{subText}</SubText>
      </div>
      <BtnWrap propmttype={promptType}>
        <button disabled={loading} onClick={cancel}>
          cancel
        </button>
        <button disabled={loading} onClick={proceed}>
          {loading ? <MiniSpinner /> : btnText}
        </button>
      </BtnWrap>
    </StyledPrompt>
  );
};

export default Prompt;
