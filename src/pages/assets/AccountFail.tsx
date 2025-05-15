import { Fail } from "@/components";
import * as S from "./AccountFail.styles";

export default function AccountFail() {
  return (
    <S.AccountFailContainer>
      <Fail label={`계좌 등록에 실패했어요\n다시 등록해 주세요`} />
    </S.AccountFailContainer>
  );
}
