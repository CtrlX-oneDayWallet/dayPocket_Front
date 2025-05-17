import styled from "styled-components";

export const SuccessContainer = styled.div<{ $point: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${(props) => (props.$point === "" ? "247px" : "193px")};
`;

export const PointLabel = styled.p`
  color: ${(props) => props.theme.primary.pu1};
  text-align: center;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.8px;
  margin: 0px;
  padding: 0;
`;

export const SuccessLabel = styled.p`
  white-space: pre-line;
  color: ${(props) => props.theme.gray.gy6};
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.44px;
  margin-top: 16px;
`;
