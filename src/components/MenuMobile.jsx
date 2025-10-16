import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { LiaTimesCircleSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "./Logo";

const StyledMenuMobile = styled.div`
  background-color: var(--color-over-900);
  backdrop-filter: blur(20px);
  padding: 1rem;
  position: fixed;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;

  transition: left 0.3s ease;
  right: 0;

  left: ${(props) => (props.isactive === "true" ? "0" : "130%")};

  svg {
    fill: var(--color-grey-0);
    font-size: 2.6rem;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  gap: 1rem;

  a {
    padding: 1rem 1rem;
    border: 1px solid var(--color-grey-400);
    color: var(--color-grey-0);
    font-weight: bold;

    &.active {
      background-color: var(--color-primary);
      transform: translateX(10px);
    }

    &:hover:not(.active) {
      background-color: var(--color-secondary);
      transition: all 0.3s ease;
      transform: translateX(10px);
    }
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: ${(props) => (props.isaclicked === "true" ? "300px" : "60px")};
  padding: 1rem;
  transition: height 0.3s ease;

  border: 1px solid var(--color-grey-400);
  color: var(--color-grey-0);
  font-weight: bold;

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      margin: 0;
      font-size: var(--f-md);
      transition: transform 0.3s ease;
    }
  }
  a {
    padding: 0.5rem;
  }
`;
const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TopMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem 0;
  width: 100%;
  margin-block: 1rem 3rem;
`;

const StyledCTA = styled(NavLink)`
  width: 98%;
  margin-inline: auto;
  text-align: center;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-secondary);
  outline: 2px solid var(--color-grey-0);
  outline-offset: 2px;
  color: var(--color-grey-0);
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-secondary);
    color: var(--color-grey-0);
    transform: translateX(0) !important;
    transition: all 0.3s ease;
    outline-color: var(--color-primary);
    width: 97%;
    outline-offset: 3px;
  }
`;

const MenuMobile = ({ isActive, setIsActive }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // Close the menu when the route changes
    setIsActive(false);
    setIsClicked(false);
  }, [pathname, setIsActive, setIsClicked]);

  return (
    <StyledMenuMobile isactive={isActive ? "true" : "false"}>
      <TopMenu>
        <Logo type="dark" />
        <LiaTimesCircleSolid onClick={() => setIsActive((prev) => !prev)} />
      </TopMenu>

      <MenuLinks>
        <NavLink end to="/">
          Home
        </NavLink>
        <NavLink end to="/about">
          About Us
        </NavLink>
        <NavLink end to="/articles">
          Articles
        </NavLink>
        <QuickLinks isaclicked={isClicked ? "true" : "false"}>
          <span onClick={() => setIsClicked((prev) => !prev)}>
            Quick Links
            <IoIosArrowDown
              style={isClicked ? { transform: "rotate(180deg)" } : {}}
            />
          </span>
          {isClicked && (
            <DropDown>
              <NavLink end to="/infant-baptism">
                infant baptism
              </NavLink>
              <NavLink end to="/search-records">
                search records
              </NavLink>
              <NavLink end to="/history">
                church history
              </NavLink>
            </DropDown>
          )}
        </QuickLinks>
        <NavLink end to="/prayer-request">
          Mass Requests
        </NavLink>
        <NavLink end to="/contact">
          Contact Us
        </NavLink>
        <StyledCTA to="/donate">Donate</StyledCTA>
      </MenuLinks>
    </StyledMenuMobile>
  );
};

export default MenuMobile;
