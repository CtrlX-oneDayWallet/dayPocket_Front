import styled from "styled-components";

export const AccountSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 247px;
`;

export const AccountSuccessLabel = styled.p`
  color: ${(props) => props.theme.gray.gy6};
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.44px;
`;
