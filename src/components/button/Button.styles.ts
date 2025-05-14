import styled from "styled-components";

export const ButtonContainer = styled.button<{ disabled?: boolean }>`
  display: flex;
  width: 555px;
  height: 98px;
  padding: 33px 216px 34px 227px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background-color: ${(props) =>
    props.disabled ? props.theme.gray.gy3 : props.theme.primary.pu1};
`;

export const ButtonText = styled.p`
  color: ${(props) => props.theme.gray.white};
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.2px;
`;
