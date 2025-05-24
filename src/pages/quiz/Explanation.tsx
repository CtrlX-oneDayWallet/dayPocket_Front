import { useEffect, useState } from "react";
import * as S from "./Explanation.styles";
import { Button } from "@/components";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/lib/axionsInstance";

const questions = [
  { id: 1, text: "신용카드를 잘 쓰면\n신용점수가 오른다.", answer: true },
  { id: 2, text: "적금은 중간에 깨도\n이자가 똑같다.", answer: false },
  { id: 3, text: "주식 계좌는 앱으로도\n만들 수 있다.", answer: true },
  { id: 4, text: "비상금 대출은 무조건\n직장이 있어야 된다.", answer: false },
  { id: 5, text: "연 5% 적금이면 매달\n5% 이자가 붙는다.", answer: false },
];

export default function Explanation() {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState(
    questions.map((q) => ({ id: q.id, answer: null as boolean | null }))
  );
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  useEffect(() => {
    async function fetchAnswers() {
      try {
        const res = await axiosInstance("/quiz-list", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    }
    fetchAnswers();
  }, []);

  const handleAnswer = (id: number, value: boolean) => {
    setAnswers((prev) =>
      prev.map((a) => (a.id === id ? { ...a, answer: value } : a))
    );
  };

  const handleSubmit = () => {
    navigate("/quiz/correct", { state: { answers } });
  };

  const allAnswered = answers.every((a) => a.answer !== null);

  return (
    <S.ExplanationContainer>
      <S.Title>
        {`${month}월 ${day}일`}
        <br />
        오늘의 퀴즈
      </S.Title>
      <S.QuestionList>
        {questions.map((q) => {
          const current = answers.find((a) => a.id === q.id);
          return (
            <S.QuestionItem key={q.id}>
              <S.QuestionText>{q.text}</S.QuestionText>
              <S.OXGroup>
                <S.OXButton
                  chosen={current?.answer === true}
                  selected={false}
                  onClick={() => handleAnswer(q.id, true)}
                >
                  <S.TrueIcon $selected={current?.answer === true} />
                </S.OXButton>
                <S.OXButton
                  chosen={current?.answer === false}
                  selected={false}
                  onClick={() => handleAnswer(q.id, false)}
                >
                  <S.FalseIcon $selected={current?.answer === false} />
                </S.OXButton>
              </S.OXGroup>
            </S.QuestionItem>
          );
        })}
      </S.QuestionList>

      <Button label="제출하기" onClick={handleSubmit} disabled={!allAnswered} />
    </S.ExplanationContainer>
  );
}
