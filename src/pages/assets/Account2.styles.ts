import styled from "styled-components";

export const Account2Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  display: flex;
  width: 302px;
  height: 59px;
  margin-top: 84px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.gray.gy6};
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1px;
`;

export const InputWrap = styled.div`
  display: flex;
  width: 295px;
  height: 46px;
  align-items: center;
  gap: 60px;
  border-radius: 10px;
  border: 1px solid #edf1f3;
  background-color: ${({ theme }) => theme.gray.white};
  box-shadow: 0px 1px 2px 0px rgba(228, 229, 231, 0.24);
  margin-bottom: 44px;
  position: relative;
`;

export const InputBox = styled.div`
  position: relative;
  width: 207px;
  height: 100%;

  input {
    position: absolute;
    top: 10px;
    transition: opacity 0.5s ease;
  }
`;

export const InputLabel = styled.input`
  width: 207px;
  height: 21px;
  overflow: hidden;
  color: ${({ theme }) => theme.gray.gy6};
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.28px;
  margin-left: 14px;
  border: none;

  &:focus {
    outline: none !important;
    box-shadow: none !important;
    border: none;
  }
`;
