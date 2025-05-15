import * as S from "./Success.styles";
import { ReactComponent as CoinIcon } from "@/assets/icons/coin.svg";
import { ReactComponent as ShadowIcon } from "@/assets/icons/bottom-shadow.svg";
import { SuccessProps } from "./Success.types";

export default function Success({ point = "", label }: SuccessProps) {
  return (
    <S.SuccessContainer $point={point}>
      {point && <S.PointLabel>{point}</S.PointLabel>}
      <CoinIcon width={240} height={240} />
      <ShadowIcon width={128} height={19} />
      <S.SuccessLabel>{label}</S.SuccessLabel>
    </S.SuccessContainer>
  );
}
