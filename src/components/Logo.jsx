import { Link } from "react-router-dom";
import { device } from "@/helpers/mediaQueries";
import styled from "styled-components";

const StyledLogo = styled.div`
  border: 1px solid;

  display: flex;
  align-items: center;

  font-weight: bold;
  font-size: var(--f-md);
  padding: 0 0.4rem;

  color: ${(props) => (props.type === "dark" ? "var(--color-grey-0)" : "")};

  @media ${device.tablet} {
    font-size: var(--f-lg);
  }
`;
const Logo = ({ type = "light" }) => {
  return (
    <StyledLogo type={type}>
      <Link to="/">Logo</Link>
    </StyledLogo>
  );
};

export default Logo;
