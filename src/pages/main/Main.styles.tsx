import styled from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${(props) => props.theme.primary.pu1};
`;

export const Link = styled.a`
  color: ${(props) => props.theme.primary.pu1};
`;
