import { Fail } from "@/components";
import * as S from "./TradeFail.styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function TradeFail() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main/Challenge");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <S.TradeFailContainer>
      <Fail label={`중고거래 인증에 실패했어요\n다시 업로드 해주세요`} />
    </S.TradeFailContainer>
  );
}
