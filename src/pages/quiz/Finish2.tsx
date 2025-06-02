import { Success } from "@/components";
import * as S from "./Finish2.styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Finish2() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main/Challenge");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <S.Finish2Container>
      <Success label={`아쉽네요 🥲\n내일 다시 도전해 볼까요?`} />
    </S.Finish2Container>
  );
}
