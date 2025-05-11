import styled from "styled-components";
import { Outlet } from "react-router-dom";

const LayoutWrapper = styled.div`
  min-height: 100vh;
  background: var(--background, linear-gradient(180deg, #cddffc 0%, #fff 100%));
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <Outlet />
    </LayoutWrapper>
  );
};

export default Layout;
