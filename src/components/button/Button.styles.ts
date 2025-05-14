import styled from "styled-components";

export const ButtonContainer = styled.button<{ disabled?: boolean }>`
  display: flex;
  width: 300px;
  height: 53px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  border: none;
  background-color: ${(props) =>
    props.disabled ? props.theme.gray.gy3 : props.theme.primary.pu1};
  cursor: pointer;
`;

export const ButtonText = styled.p`
  color: ${(props) => props.theme.gray.white};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.7px;
`;
