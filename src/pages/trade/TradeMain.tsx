import { Button } from "@/components";
import * as S from "./TradeMain.styles";
import { ReactComponent as CoinIcon } from "@/assets/icons/coin.svg";
import { ReactComponent as UploadIcon } from "@/assets/icons/upload.svg";
import { useNavigate } from "react-router-dom";

export default function TradeMain() {
  const navigate = useNavigate();
  return (
    <S.TradeMainContainer>
      <S.TextLabel>
        중고거래 인증하고
        <br /> 500원 받기
      </S.TextLabel>
      <CoinIcon width={240} height={240} />
      <Button
        label="거래 화면 업로드"
        icon={<UploadIcon />}
        onClick={() => navigate("/trade/success")}
      />
    </S.TradeMainContainer>
  );
}
