import styled from "styled-components";
import { ReactComponent as TrueIconBase } from "@/assets/icons/icon-true.svg";
import { ReactComponent as FalseIconBase } from "@/assets/icons/icon-false.svg";

export const ExplanationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 43px;
  padding-bottom: 23px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.gray.gy6};
  width: 323px;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.1px;
`;

export const QuestionList = styled.div`
  width: 323px;
  height: 567px;
  flex-shrink: 0;
  border-radius: 22px;
  background-color: ${({ theme }) => theme.gray.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 58px;
  margin-bottom: 24px;
  margin-top: 10px;
`;

export const QuestionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 57px;
`;

export const QuestionText = styled.p`
  white-space: pre-line;
  color: ${({ theme }) => theme.gray.gy6};
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.9px;
`;

export const OXGroup = styled.div`
  width: 126px;
  height: 57.503px;
  flex-shrink: 0;
  display: flex;
  gap: 10px;
`;

export const OXButton = styled.button<{
  selected: boolean;
  chosen?: boolean;
}>`
  width: 57px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: ${({ chosen, theme }) =>
    chosen ? `3px solid ${theme.primary.pu1}` : "none"};
  background-color: ${({ selected, theme }) =>
    selected ? theme.primary.pu2 : theme.gray.gy1};

  transition: all 0.3s ease;
  cursor: pointer;
`;

export const TrueIcon = styled(TrueIconBase)<{ $selected: boolean }>`
  fill: ${({ theme, $selected }) =>
    $selected ? theme.primary.pu1 : theme.gray.gy3};
  transition: fill 0.5s ease;
`;

export const FalseIcon = styled(FalseIconBase)<{ $selected: boolean }>`
  fill: ${({ theme, $selected }) =>
    $selected ? theme.primary.pu1 : theme.gray.gy3};
  transition: fill 0.5s ease;
`;
