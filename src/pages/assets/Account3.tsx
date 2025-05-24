import { TopNav } from "@/components";
import * as S from "./Account3.styles";
import Set from "@/components/set/Set";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/lib/axionsInstance";

export default function Account3() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");

  async function handleMove() {
    try {
      await axiosInstance.post("/point/withdraw", Number(amount), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/asset/depositsuccess");
    } catch (error) {
      console.error("Error occurred while setting the amount:", error);
      navigate("/asset/depositfail");
      return;
    }
  }

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
