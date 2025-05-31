import { useEffect, useState } from "react";
import * as S from "./Explanation.styles";
import { Button } from "@/components";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/lib/axionsInstance";

interface Question {
  id: number;
  question: string;
}

export default function Explanation() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState(
    questions
      ? questions.map((q) => ({ id: q.id, answer: null as boolean | null }))
      : []
  );
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  useEffect(() => {
    if (questions.length > 0) {
      setAnswers(questions.map((q) => ({ id: q.id, answer: null })));
    }
  }, [questions]);

  useEffect(() => {
    async function fetchAnswers() {
      try {
        const res = await axiosInstance("/quiz-list", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setQuestions(res.data);
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
    navigate("/quiz/correct", { state: { answers, questions } });
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
        {questions?.map((q) => {
          const current = answers.find((a) => a.id === q.id);
          return (
            <S.QuestionItem key={q.id}>
              <S.QuestionText>{q.question}</S.QuestionText>
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
