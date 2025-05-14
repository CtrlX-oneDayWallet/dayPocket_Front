import Button from "@/components/button/Button";
import { useState } from "react";
import * as S from "./Set.styles";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CancelIcon } from "@/assets/icons/arrow.svg";
import { FormatNumber } from "@/utils";

export default function Set({ lable }: { lable?: string }) {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("0");

  const handleNumberClick = (value: string) => {
    if (amount === "0") {
      setAmount(value);
    } else {
      setAmount((prev) => prev + value);
    }
  };

  const handleCancel = () => {
    setAmount((prev) => {
      const next = prev.slice(0, -1);
      return next.length === 0 ? "0" : next;
    });
  };

  const numberPad = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "00", "0"];

  return (
    <S.SetContainer>
      <S.SetTitle>{lable}</S.SetTitle>
      <S.InputBox>
        <S.InputDisplay>{FormatNumber(amount)}</S.InputDisplay>
        <S.Won>원</S.Won>
      </S.InputBox>
      <Button
        label="확인"
        onClick={() => navigate("/asset/2")}
        disabled={amount === "0"}
      />
      <S.NumberContainer>
        <S.NumberBox>
          {numberPad.map((num) => (
            <S.Number key={num} onClick={() => handleNumberClick(num)}>
              {num}
            </S.Number>
          ))}
          <S.Number onClick={handleCancel}>
            <CancelIcon width={35} height={36.82} />
          </S.Number>
        </S.NumberBox>
      </S.NumberContainer>
    </S.SetContainer>
  );
}
