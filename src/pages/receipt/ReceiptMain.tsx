import { useNavigate } from "react-router-dom";
import * as S from "./ReceiptMain.styles";
import React from "react";
import { Button } from "@/components";
import { ReactComponent as CoinIcon } from "@/assets/icons/coin.svg";
import { ReactComponent as UploadIcon } from "@/assets/icons/upload.svg";

export default function ReceiptMain() {
  const navigate = useNavigate();
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      navigate("/receipt/success");
    } else {
      navigate("/receipt/fail");
    }
  };
  return (
    <S.ReceiptMainContainer>
      <S.TextLabel>
        영수증 등록하고
        <br /> 100원 받기
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
    </S.ReceiptMainContainer>
  );
}
