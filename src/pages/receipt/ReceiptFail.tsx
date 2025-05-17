import { useNavigate } from "react-router-dom";
import * as S from "./ReceiptFail.styles";
import { useEffect } from "react";
import { Fail } from "@/components";

export default function ReceiptFail() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/receipt");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <S.ReceiptFailContainer>
      <Fail label={`영수증 인증에 실패했어요\n다시 업로드 해주세요`} />
    </S.ReceiptFailContainer>
  );
}
