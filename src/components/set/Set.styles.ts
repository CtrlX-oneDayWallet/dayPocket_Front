import styled from "styled-components";

export const SetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SetTitle = styled.p`
  display: flex;
  width: 302px;
  height: 59px;
  margin: 0;
  margin-top: 36px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: ${(props) => props.theme.gray.gy6};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1px;
`;

export const InputBox = styled.div`
  display: flex;
  width: 300px;
  height: 53px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #edf1f3;
  background-color: ${(props) => props.theme.gray.white};
  box-shadow: 0px 1px 2px 0px rgba(228, 229, 231, 0.24);
  margin-bottom: 22px;
`;

export const InputDisplay = styled.div`
  width: 180px;
  height: 21px;
  color: ${(props) => props.theme.gray.gy6};
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.32px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Won = styled.p`
  color: ${(props) => props.theme.gray.gy6};
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.32px;
`;

export const NumberContainer = styled.div`
  display: flex;
  width: 370px;
  height: 444px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.gray.white};
  border-radius: 22px;
  margin-top: 58px;
`;

export const NumberBox = styled.div`
  display: grid;
  width: 328px;
  height: 397px;
  row-gap: 20px;
  column-gap: 10px;
  flex-shrink: 0;
  grid-template-rows: repeat(4, minmax(0, 1fr));
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;

export const Number = styled.button`
  font-size: 45px;
  font-weight: 550;
  color: ${({ theme }) => theme.gray.gy4};
  background-color: transparent;
  border: none;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &.active {
    color: ${({ theme }) => theme.gray.white};
  }
`;
