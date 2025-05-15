import { Success } from "@/components";
import * as S from "./DepositSuccess.styles";

export default function DepositSuccess() {
  return (
    <S.DepositSuccessContainer>
      <Success
        label={`입금 신청을 완료했어요 🎉\n챌린지 하고 다시 용돈 받아보아요`}
      />
    </S.DepositSuccessContainer>
  );
}
