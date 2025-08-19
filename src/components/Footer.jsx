import styled from "styled-components";
import { RiTwitterXFill } from "react-icons/ri";
import { LuFacebook } from "react-icons/lu";
import { FiInstagram } from "react-icons/fi";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { device } from "@/helpers/mediaQueries";

const Columns = styled.div`
  height: fit-content;
  padding: 1rem;

  @media ${device.desktop} {
    /* border: 1px solid; */
    max-width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
`;
const Column = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  h3 {
    color: var(--color-primary);
  }
`;
const CoulmnOne = styled(Column)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    align-self: flex-start;
    padding: 0.3rem 1rem;
    border-radius: 5px;
    background-color: var(--color-secondary);
    color: var(--color-grey-0);
    transition: all 0.3s ease;
    border: 1px solid;

    &:hover {
      background-color: var(--color-primary);
      outline: 2px solid var(--color-grey-0);
      outline-offset: 2px;
    }
  }
`;

const ColumnTwo = styled(Column)`
  @media ${device.desktop} {
    padding-left: 4rem;
  }
`;

const LogoWrap = styled.div`
  border: 1px solid;
  width: fit-content;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.desktop} {
    max-width: 200px;
    flex-wrap: wrap;
    row-gap: 1rem;

    button {
      height: 40px;
    }
  }
`;

const SocialBtn = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  gap: 1rem;
  padding: 0 1rem;
  border-radius: 5px;
  svg {
    font-size: var(--f-md);
  }

  @media ${device.desktop} {
    padding-left: 0;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  padding: 1rem 0;

  a {
    border: 1px solid var(--color-grey-400);
    border-radius: 5px;
    padding: 0.2rem 1.5rem;
    min-width: 100px;
    text-align: center;

    &:hover {
      background-color: var(--color-primary);
      outline: 2px solid var(--color-grey-0);
      outline-offset: 2px;
    }
  }

  @media ${device.desktop} {
    max-width: 400px;
  }
`;

const Copyright = styled.div`
  text-align: center;
  font-size: var(--f-xxsm);
  font-style: italic;
  padding: 0 2rem;

  a {
    color: var(--color-primary);
  }

  @media ${device.desktop} {
    font-size: var(--f-sm);
  }
`;
const Footer = () => {
  return (
    <>
      <Columns>
        <CoulmnOne>
          <LogoWrap>
            <Logo />
          </LogoWrap>
          <p>
            St. Matthias Catholic Church is a community of faith, rooted in the
            Eucharist and guided by the Gospel. Join us in worship, prayer, and
            service as we journey together in Christ.
          </p>
          <Bottom>
            <button>Learn More</button>
            <SocialBtn>
              <RiTwitterXFill />
              <LuFacebook />
              <FiInstagram />
            </SocialBtn>
          </Bottom>
        </CoulmnOne>
        <ColumnTwo>
          <h3>Quick Links</h3>
          <FooterLinks>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About us</Link>
            <Link to={"contact"}>Contact us</Link>
            <Link to={"donate"}>Donate</Link>
            <Link to={""}>Login</Link>
          </FooterLinks>
        </ColumnTwo>{" "}
      </Columns>
      <Copyright>
        All rights reserved © {new Date().getFullYear()} . Designed and
        Developed By{" "}
        <a href="https://asasteve.netlify.app/" target="_blank">
          DevSteve
        </a>{" "}
        with 💖
      </Copyright>
    </>
  );
};

export default Footer;
