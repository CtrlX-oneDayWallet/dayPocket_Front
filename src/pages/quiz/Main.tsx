import { Button } from "@/components";
import * as S from "./Main.styles";
import { ReactComponent as CoinIcon } from "@/assets/icons/coin.svg";
import { useNavigate } from "react-router-dom";

export default function QuizMain() {
  const navigate = useNavigate();
  return (
    <S.QuizMainContainer>
      <S.Title>
        금융 지식 퀴즈 풀고
        <br />
        최대 250원 받기
      </S.Title>
      <CoinIcon width={240} height={240} />
      <Button label="퀴즈 시작" onClick={() => navigate("/quiz/explanation")} />
    </S.QuizMainContainer>
  );
}
