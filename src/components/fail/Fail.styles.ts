import styled from "styled-components";

export const FailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FailLabel = styled.p`
  color: ${(props) => props.theme.gray.gy6};
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.44px;
  white-space: pre-line;
  margin-top: 55px;
`;
