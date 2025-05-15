import { Fail } from "@/components";
import * as S from "./DepositFail.styles";

export default function DepositFail() {
  return (
    <S.DepositFailContainer>
      <Fail label={`입금 신청에 실패했어요\n다시 시도해 주세요`} />
    </S.DepositFailContainer>
  );
}
