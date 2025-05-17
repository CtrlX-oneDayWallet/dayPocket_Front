import { Success } from "@/components";
import * as S from "./Finish1.styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Finish1() {
  const navigate = useNavigate();
  const location = useLocation();
  const correctCount = location.state?.correctCount;
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/quiz");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <S.Finish1Container>
      <Success
        point={`+${correctCount * 50}`}
        label={`${correctCount}개 맞추기에 성공했어요`}
      />
    </S.Finish1Container>
  );
}
