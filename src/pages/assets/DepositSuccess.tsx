import { Success } from "@/components";
import * as S from "./DepositSuccess.styles";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DepositSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/asset");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <S.DepositSuccessContainer>
      <Success
        label={`입금 신청을 완료했어요 🎉\n챌린지 하고 다시 용돈 받아보아요`}
      />
    </S.DepositSuccessContainer>
  );
}
