import { Button } from "@/components";
import * as S from "./Explanation.styles";
import { useNavigate } from "react-router-dom";

const questions = [
  { id: 1, text: "신용카드를 잘 쓰면\n신용점수가 오른다.", correct: true },
  { id: 2, text: "적금은 중간에 깨도\n이자가 똑같다.", correct: false },
  { id: 3, text: "주식 계좌는 앱으로도\n만들 수 있다.", correct: true },
  { id: 4, text: "비상금 대출은 무조건\n직장이 있어야 된다.", correct: false },
  { id: 5, text: "연 5% 적금이면 매달\n5% 이자가 붙는다.", correct: false },
];

// 임시 예시: 사용자가 선택한 정답
const userAnswers = [
  { id: 1, answer: true },
  { id: 2, answer: false },
  { id: 3, answer: false },
  { id: 4, answer: false },
  { id: 5, answer: true },
];

export default function Correct() {
  const navigate = useNavigate();
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const correctCount = questions.reduce((acc, q) => {
    const user = userAnswers.find((a) => a.id === q.id);
    return acc + (user?.answer === q.correct ? 1 : 0);
  }, 0);

  const handleClick = () => {
    if (correctCount > 0) {
      navigate("/quiz/finish1", { state: { correctCount } });
    } else {
      navigate("/quiz/finish2");
    }
  };

  return (
    <S.ExplanationContainer>
      <S.Title>
        {`${month}월 ${day}일`}
        <br />
        오늘의 퀴즈
      </S.Title>
      <S.QuestionList>
        {questions.map((q) => {
          const user = userAnswers.find((a) => a.id === q.id);
          const userAnswer = user?.answer;
          const correctAnswer = q.correct;

          return (
            <S.QuestionItem key={q.id}>
              <S.QuestionText>{q.text}</S.QuestionText>
              <S.OXGroup>
                <S.OXButton
                  chosen={userAnswer === true}
                  selected={correctAnswer === true}
                >
                  <S.TrueIcon $selected={userAnswer === true} />
                </S.OXButton>
                <S.OXButton
                  chosen={userAnswer === false}
                  selected={correctAnswer === false}
                >
                  <S.FalseIcon $selected={userAnswer === false} />
                </S.OXButton>
              </S.OXGroup>
            </S.QuestionItem>
          );
        })}
      </S.QuestionList>
      <Button label="결과 확인하기" onClick={handleClick} />
    </S.ExplanationContainer>
  );
}
