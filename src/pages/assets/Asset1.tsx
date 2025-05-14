import { TopNav } from "@/components";
import * as S from "./Asset1.styles";
import Set from "@/components/set/Set";

export default function SetPage() {
  return (
    <S.SetPageContainer>
      <TopNav />
      <Set />
    </S.SetPageContainer>
  );
}
