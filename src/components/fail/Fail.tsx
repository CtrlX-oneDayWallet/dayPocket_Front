import * as S from "./Fail.styles";
import { ReactComponent as FailIcon } from "@/assets/icons/caution.svg";

export default function Fail({ label }: { label: string }) {
  return (
    <S.FailContainer>
      <FailIcon width={224} height={224} />
      <S.FailLabel>{label}</S.FailLabel>
    </S.FailContainer>
  );
}
