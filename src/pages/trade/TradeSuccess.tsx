import { Success } from "@/components";
import * as S from "./TradeSuccess.styles";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TradeSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main/Challenge");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <S.TradeSuccessContainer>
      <Success point="+ 500원" label="중고거래 인증에 성공했어요" />
    </S.TradeSuccessContainer>
  );
}
