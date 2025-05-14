import { ReactComponent as BackIcon } from "@/assets/icons/arrow-back.svg";
import * as S from "./TopNav.styles";
import { useNavigate } from "react-router-dom";

export default function TopNav() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <S.TopNavContainer>
      <BackIcon
        width={24}
        height={30}
        style={{ cursor: "pointer" }}
        onClick={() => handleBackClick()}
      />
    </S.TopNavContainer>
  );
}
