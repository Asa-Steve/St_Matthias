import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/NavbarMobile";
import { useIsMobile } from "@/helpers/useResize";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  /* overflow-y: auto; */
  position: relative;
`;

const NavbarWrap = styled.div`
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-grey-0);
`;

const FooterWrap = styled.div`
  border: 1px solid red;
  min-height: 300px;
`;

const Main = styled.main`
  border: 1px solid blue;
  flex: 1;
  min-height: 600px;
`;
const AppLayout = () => {
  const isMobile = useIsMobile(992);

  return (
    <StyledAppLayout>
      <NavbarWrap>
        {!isMobile && <Navbar />}
        {isMobile && <NavbarMobile />}
      </NavbarWrap>
      <Main>
        <Outlet />
      </Main>
      <FooterWrap>
        <Footer />
      </FooterWrap>
    </StyledAppLayout>
  );
};

export default AppLayout;
