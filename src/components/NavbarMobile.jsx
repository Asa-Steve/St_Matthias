import styled from "styled-components";
import Logo from "./Logo";
import MenuMobile from "./MenuMobile";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const StyledNavbarMobile = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #fff;
  position: relative;
  overflow: ${(props) => (props.isactive === "true" ? "visible" : "hidden")};
`;

const MenuWrap = styled.div`
  display: flex;

  svg {
    font-size: var(--f-lg);
  }
`;
const NavbarMobile = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <StyledNavbarMobile isactive={isActive ? "true" : "false"}>
      <Logo />
      <MenuWrap>
        <RxHamburgerMenu onClick={() => setIsActive((prev) => !prev)} />
        <MenuMobile isActive={isActive} setIsActive={setIsActive} />
      </MenuWrap>
    </StyledNavbarMobile>
  );
};

export default NavbarMobile;
