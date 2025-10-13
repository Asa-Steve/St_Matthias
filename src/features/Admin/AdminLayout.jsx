import { NavLink, Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const StyledAdminLayout = styled.div`
  height: 100vh;
  display: flex;
`;

const Aside = styled.aside`
  height: 100%;
  width: 25%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  box-shadow: -1px 0px 8px #a5a5a5b7;

  nav {
    display: flex;
    flex-direction: column;
    min-height: 300px;
    max-height: 100%;
    overflow: hidden;
    overflow-y: auto;
    width: 100%;
    gap: 10px;
    padding: 1rem 0.3rem;

    a {
      padding: 0.5rem 1rem;
      position: relative;
      width: 93%;
      border-radius: 8px;
      margin-left: 5%;
      transition: all 0.3s;
      border: 1px solid var(--color-grey-200);
      color: var(--color-grey-500);
      display: flex;
      align-items: center;
      gap: 1rem;

      svg {
        font-size: 20px;
      }

      &::before {
        content: "";
        position: absolute;
        left: -4%;
        top: 0;
        inset-block: 0;
        width: 5px;
        border-radius: 8px;
        transition: all 0.3s;
      }

      &:hover {
        background-color: var(--color-grey-300);

        &::before {
          background-color: var(--color-grey-300);
        }
      }
      &.active {
        border: 1px solid red;
        background-color: var(--color-primary);
        color: var(--color-grey-0);

        &::before {
          background-color: var(--color-primary);
        }
      }
    }
  }
`;

const UserDeit = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    object-fit: cover;
  }

  p {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-style: italic;
    color: var(--color-grey-400);
  }
`;

const WrapperDiv = styled.div`
  width: calc(100% - 25%);
  display: flex;
  flex-direction: column;
`;

const HeaderBar = styled.div`
  border-bottom: 1px solid var(--color-grey-200);
  height: 8%;
  display: flex;
  align-items: center;
  padding-inline: 1rem;
`;

const RightDiv = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-inline: 1rem;

  svg {
    font-size: 20px;
  }

  &:hover {
    cursor: pointer;
    color: var(--color-grey-500);
  }
`;

const Main = styled.main`
  max-height: calc(100% - 8%);
  padding: 1rem;
  overflow-y: auto;
`;

const navLinks = [
  { to: "/", value: "Insight", icon: "fluent:data-trending-16-regular" },
  { to: "posts", value: "Posts", icon: "iconoir:post" },
  { to: "users", value: "Users", icon: "heroicons:users" },
  { to: "records", value: "Records", icon: "arcticons:prompt-post" },
  { to: "requests", value: "Mass Requests", icon: "la:pray" },
  {
    to: "/infant-reg",
    value: "Infant Registrations",
    icon: "hugeicons:infant",
  },
  { to: "/settings", value: "Settings", icon: "streamline:cog" },
];

const AdminLayout = () => {
  return (
    <StyledAdminLayout>
      {/* Aside */}
      <Aside>
        <UserDeit>
          <img src="https://picsum.photos/200" alt="admin-photo" />
          <div>
            <h3>Celina</h3>
            <p>Admin</p>
          </div>
        </UserDeit>
        <nav>
          {navLinks?.map((navItem, idx) => (
            <NavLink
              key={idx}
              to={navItem?.to === "/" ? "/admin" : `/admin/${navItem?.to}`}
            >
              <Icon icon={navItem?.icon}></Icon>
              {navItem?.value}
            </NavLink>
          ))}

          <NavLink to={"/"}>
            <Icon icon={"carbon:return"}></Icon> Return to homepage
          </NavLink>
        </nav>
      </Aside>
      {/* Top header bar */}
      <WrapperDiv>
        <HeaderBar>
          <RightDiv>
            <Icon icon="material-symbols-light:logout-rounded" />
            <span>Logout</span>
          </RightDiv>
        </HeaderBar>
        {/* Main content area */}
        <Main>
          <Outlet />
        </Main>
      </WrapperDiv>
    </StyledAdminLayout>
  );
};

export default AdminLayout;
