import styled from "styled-components";
import { ReactComponent as Down } from "@/assets/icons/arrow-down.svg";

export const Account1Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  display: flex;
  width: 302px;
  height: 59px;
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

export const BoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
`;

export const SelectBox = styled.div<{ $open: boolean }>`
  display: flex;
  flex-direction: column;
  width: 295px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #edf1f3;
  background-color: ${({ theme }) => theme.gray.white};
  box-shadow: 0px 1px 2px 0px rgba(228, 229, 231, 0.24);
`;

export const SelectHeader = styled.div`
  display: flex;
  width: 295px;
  gap: 31px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const DownIcon = styled(Down)<{ $rotated: boolean }>`
  width: 18px;
  height: 13px;
  transform: ${({ $rotated }) => ($rotated ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.3s ease;
`;
export const DropdownWrapper = styled.div<{ $open: boolean }>`
  max-height: ${({ $open }) => ($open ? "10rem" : "0")};
  overflow-y: auto;
  transition: max-height 0.7s ease;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SelectBank = styled.p`
  width: 207px;
  height: 21px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.gray.gy6};
  margin-left: 10px;
`;

export const BankOption = styled.p`
  width: 255px;
  height: 21px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.gray.gy6};
  margin-left: 10px;
`;

export const DropdownItem = styled.div`
  display: flex;

  &:hover {
    background-color: ${({ theme }) => theme.gray.gy1};
    border-radius: 0.75rem;
  }
`;

export const InputBox = styled.div`
  display: flex;
  width: 295px;
  height: 46px;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #edf1f3;
  background-color: ${({ theme }) => theme.gray.white};
  box-shadow: 0px 1px 2px 0px rgba(228, 229, 231, 0.24);
  margin-bottom: 44px;
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
