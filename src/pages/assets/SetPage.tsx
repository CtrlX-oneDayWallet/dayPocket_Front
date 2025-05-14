import { TopNav } from "@/components";
import * as S from "./SetPage.styles";
import Set from "@/components/set/Set";

export default function SetPage() {
  return (
    <S.SetPageContainer>
      <TopNav />
      <Set />
    </S.SetPageContainer>
  );
}
