import { Fail } from "@/components";
import * as S from "./AccountFail.styles";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AccountFail() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/asset");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <S.AccountFailContainer>
      <Fail label={`계좌 등록에 실패했어요\n다시 등록해 주세요`} />
    </S.AccountFailContainer>
  );
}
