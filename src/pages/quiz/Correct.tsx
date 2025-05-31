import { Button } from "@/components";
import * as S from "./Explanation.styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import axiosInstance from "@/lib/axionsInstance";

interface Question {
  id: number;
  question: string;
  correct: boolean;
}

export default function Correct() {
  const location = useLocation();
  const answers = useMemo(
    () => location.state?.answers || [],
    [location.state?.answers]
  );
  const questionRes = useMemo(
    () => location.state?.questions || [],
    [location.state?.questions]
  );
  const [questions, setQuestions] = useState<Question[]>([]);
  const navigate = useNavigate();
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const correctCount = questions.filter((q) => q.correct).length;

  useEffect(() => {
    async function loadQuizData() {
      try {
        const userAnswerRes = await axiosInstance.post(
          "/submit/quiz",
          answers,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const merged = questionRes.map((q: any, index: number) => ({
          ...q,
          correct: userAnswerRes.data[index],
        }));
        setQuestions(merged);
      } catch (err) {
        console.error("Error loading quiz data", err);
      }
    }

    loadQuizData();
  }, [answers, questionRes]);

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
          const user = answers.find((a: any) => a.id === q.id);
          const userAnswer = user?.answer;
          const isCorrect = q.correct;

          return (
            <S.QuestionItem key={q.id}>
              <S.QuestionText>{q.question}</S.QuestionText>
              <S.OXGroup>
                <S.OXButton
                  selected={userAnswer === true}
                  chosen={
                    (isCorrect && userAnswer === true) ||
                    (!isCorrect && userAnswer === false)
                  }
                >
                  <S.TrueIcon $selected={userAnswer === true} />
                </S.OXButton>

                <S.OXButton
                  selected={userAnswer === false}
                  chosen={
                    (isCorrect && userAnswer === false) ||
                    (!isCorrect && userAnswer === true)
                  }
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
