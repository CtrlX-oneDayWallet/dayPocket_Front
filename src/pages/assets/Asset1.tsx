import { TopNav } from "@/components";
import * as S from "./Asset1.styles";
import Set from "@/components/set/Set";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/lib/axionsInstance";

export default function SetPage() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("0");

  async function handleMove() {
    try {
      await axiosInstance.post("/dayPocket/receipt/target", amount, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/main/Asset");
    } catch (error) {
      console.error("Error occurred while setting the amount:", error);
      alert("금액 설정에 실패했습니다. 다시 시도해주세요.");
      return;
    }
  }
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
