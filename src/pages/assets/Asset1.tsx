import { TopNav } from "@/components";
import * as S from "./Asset1.styles";
import Set from "@/components/set/Set";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SetPage() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("0");

  const handleMove = () => {
    navigate("/asset");
  };
  return (
    <S.SetPageContainer>
      <TopNav />
      <Set
        label="목표 금액을 설정해주세요"
        amount={amount}
        setAmount={setAmount}
        onClick={handleMove}
      />
    </S.SetPageContainer>
  );
}
