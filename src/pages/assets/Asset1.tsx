import { TopNav } from "@/components";
import * as S from "./Asset1.styles";
import Set from "@/components/set/Set";
import { useState } from "react";

export default function SetPage() {
  const [amount, setAmount] = useState("0");
  return (
    <S.SetPageContainer>
      <TopNav />
      <Set lable="확인" amount={amount} setAmount={setAmount} />
    </S.SetPageContainer>
  );
}
