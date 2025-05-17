import { TopNav } from "@/components";
import * as S from "./Account3.styles";
import Set from "@/components/set/Set";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Account3() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const handleMove = () => {
    navigate("/asset/depositsuccess");
  };

  return (
    <S.Account3Container>
      <TopNav />
      <Set
        label="얼마를 입금할까요?"
        amount={amount}
        setAmount={setAmount}
        onClick={handleMove}
      />
    </S.Account3Container>
  );
}
