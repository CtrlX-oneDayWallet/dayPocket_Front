import { Button } from "@/components";
import * as S from "./TradeMain.styles";
import { ReactComponent as CoinIcon } from "@/assets/icons/coin.svg";
import { ReactComponent as UploadIcon } from "@/assets/icons/upload.svg";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function TradeMain() {
  const navigate = useNavigate();
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      navigate("/trade/success");
    }
  };

  return (
    <S.TradeMainContainer>
      <S.TextLabel>
        중고거래 인증하고
        <br /> 500원 받기
      </S.TextLabel>
      <CoinIcon width={240} height={240} />
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(e) => handleFileChange(e)}
      />
      <Button
        label="거래 화면 업로드"
        icon={<UploadIcon />}
        onClick={() => handleUploadClick()}
      />
    </S.TradeMainContainer>
  );
}
