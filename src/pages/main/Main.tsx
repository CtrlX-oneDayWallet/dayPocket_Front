import * as S from "./Main.styles";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  return (
    <S.AppContainer>
      <S.Header>Main Page</S.Header>
      <S.Link
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      />
      <button onClick={() => navigate("/asset/1")}>이동1</button>
    </S.AppContainer>
  );
}
