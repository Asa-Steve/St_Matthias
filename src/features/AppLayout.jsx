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
  padding-block: 4rem;
  background-color: var(--color-secondary);
  color: var(--color-grey-0);
`;

const Main = styled.main`
  flex: 1;
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
