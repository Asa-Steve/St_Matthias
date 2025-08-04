import { device } from "@/helpers/mediaQueries";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledTopInfo = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(var(--color-primary), var(--color-secondary));

  h2 {
    text-transform: uppercase;
    text-align: center;
    font-size: var(--f-sm);
    max-width: 95%;
  }
  h2,
  h4 {
    color: var(--color-grey-0);
    z-index: 5;
  }

  h4 {
    font-size: var(--f-xsm);
  }

  @media ${device.tablet} {
    height: 300px;

    h2 {
      font-size: var(--f-lg);
    }
    h4 {
      font-size: var(--f-sm);
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: #000000b4;
  z-index: 1;
`;

const TopInfo = ({ subText, text = "welcome to this page" }) => {
  const location = useLocation();
  const path = "home" + location.pathname.split("/").join(" / ");

  return (
    <StyledTopInfo>
      <Overlay />
      <h2>{text}</h2>
      <h4>{subText ?? path}</h4>
    </StyledTopInfo>
  );
};

export default TopInfo;
