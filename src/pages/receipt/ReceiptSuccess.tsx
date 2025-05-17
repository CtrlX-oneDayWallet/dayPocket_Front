import { useNavigate } from "react-router-dom";
import * as S from "./ReceiptSuccess.styles";
import { useEffect } from "react";
import { Success } from "@/components";

export default function ReceiptSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/receipt");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <S.ReceiptSuccessContainer>
      <Success
        point="+100원"
        label={`영수증 등록에 성공했어요\n등록이 완료되면 100원을 받아요`}
      />
    </S.ReceiptSuccessContainer>
  );
}
