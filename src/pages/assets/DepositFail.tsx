import { Fail } from "@/components";
import * as S from "./DepositFail.styles";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DepositFail() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main/Asset");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <S.DepositFailContainer>
      <Fail label={`입금 신청에 실패했어요\n다시 시도해 주세요`} />
    </S.DepositFailContainer>
  );
}
