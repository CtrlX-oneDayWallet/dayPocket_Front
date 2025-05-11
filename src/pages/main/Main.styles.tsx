import styled from "styled-components";
import { theme } from "../../styles/theme";

export const AppContainer = styled.div`
  text-align: center;
`;

export const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${theme.gray.white};
`;

export const Link = styled.a`
  color: ${theme.primary.pu1};
`;
