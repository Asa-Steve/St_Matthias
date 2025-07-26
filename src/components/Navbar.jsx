import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "@/components/Logo";
import { useState } from "react";

const StyledNavBar = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 1rem;
  margin-left: auto;
  margin-right: 2rem;
  a {
    padding: 0.2rem 1rem;
    /* font-weight: 500; */

    &.active {
      color: var(--color-primary);
    }

    &:hover {
      color: var(--color-primary);
      transition: all 0.3s ease;
    }
  }
`;
const QuickLinks = styled.div`
  position: relative;
  cursor: default;
  padding: 0.2rem 1rem;
`;
const StyledCTA = styled(NavLink)`
  width: 150px;
  text-align: center;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  color: var(--color-grey-0);
  transition: all 0.3s ease;
  border-radius: 5px;

  &:hover {
    background-color: var(--color-secondary);
    color: var(--color-grey-0);
    transition: all 0.3s ease;
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`;

const DropDown = styled.div`
  position: absolute;
  left: -10px;
  padding: 1.5rem 0;
`;

const DropDownWrap = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.2rem;

  a {
    transition: all 0.3s ease;
    border: 1px solid var(--color-grey-200);
    background-color: var(--color-grey-50);

    &:hover {
      transform: scale(1.1);
      background-color: var(--color-primary);
      color: var(--color-grey-0);
    }
  }
`;
const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledNavBar>
      <Logo />
      <NavLinks>
        <NavLink end to="/">
          Home
        </NavLink>
        <NavLink end to="/about">
          About
        </NavLink>
        <NavLink end to="/articles">
          Articles
        </NavLink>
        <QuickLinks
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Quick Links
          {isHovered && (
            <DropDown>
              <DropDownWrap>
                <NavLink end to="/events">
                  Events
                </NavLink>
                <NavLink end to="/news">
                  News
                </NavLink>
                <NavLink end to="/gallery">
                  Gallery
                </NavLink>
                <NavLink end to="/resources">
                  Resources
                </NavLink>
              </DropDownWrap>
            </DropDown>
          )}
        </QuickLinks>
        <NavLink end to="/prayer-request">
          Mass Requests
        </NavLink>
        <NavLink end to="/contact">
          Contact
        </NavLink>
      </NavLinks>
      <StyledCTA to="/donate">Donate</StyledCTA>
    </StyledNavBar>
  );
};

export default Navbar;
