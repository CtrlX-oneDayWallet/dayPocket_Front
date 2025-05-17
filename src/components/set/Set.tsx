import Button from "@/components/button/Button";
import * as S from "./Set.styles";
import { ReactComponent as CancelIcon } from "@/assets/icons/arrow.svg";
import { FormatNumber } from "@/utils";
import { SetProps } from "./Set.types";

export default function Set({ label, amount, setAmount, onClick }: SetProps) {
  const handleNumberClick = (value: string) => {
    if (amount === "0") {
      setAmount(value);
    } else {
      setAmount(amount + value);
    }
  };

  const handleCancel = () => {
    const next = amount.slice(0, -1);
    setAmount(next.length === 0 ? "0" : next);
  };

  const numberPad = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "00", "0"];

  return (
    <S.SetContainer>
      <S.SetTitle>{label}</S.SetTitle>
      <S.InputBox>
        <S.InputDisplay>{FormatNumber(amount)}</S.InputDisplay>
        <S.Won>원</S.Won>
      </S.InputBox>
      <Button label="확인" onClick={onClick} disabled={amount === "0"} />
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
