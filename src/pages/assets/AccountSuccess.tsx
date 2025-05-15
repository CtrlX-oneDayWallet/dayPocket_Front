import * as S from "./AccountSuccess.styles";
import { ReactComponent as SuccessIcon } from "@/assets/icons/success.svg";

export default function AccountSuccess() {
  return (
    <S.AccountSuccessContainer>
      <SuccessIcon width={224} height={224} />
      <S.AccountSuccessLabel>
        계좌를 등록했어요
        <br />
        앞으로 해당 계좌로 용돈을 받아요
      </S.AccountSuccessLabel>
    </S.AccountSuccessContainer>
  );
}
