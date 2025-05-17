import styled from "styled-components";

export const QuizMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  padding-top: 149px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.gray.gy6};
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.1px;
  margin-bottom: 12px;
`;
