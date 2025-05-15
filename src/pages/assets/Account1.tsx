import { Button, TopNav } from "@/components";
import * as S from "./Account1.styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BANKS = [
  "신한은행",
  "우리은행",
  "하나은행",
  "국민은행",
  "농협은행",
  "기업은행",
  "카카오뱅크",
  "케이뱅크",
  "토스뱅크",
  "SC제일은행",
  "부산은행",
  "대구은행",
  "광주은행",
  "전북은행",
  "제주은행",
  "씨티은행",
  "산업은행",
  "수협은행",
  "신협은행",
  "우체국은행",
  "새마을금고",
  "저축은행",
  "상호저축은행",
];

export default function Account1() {
  const navigate = useNavigate();
  const [selectOpen, setSelectOpen] = useState(false);
  const [bank, setBank] = useState("신한은행");
  return (
    <S.Account1Container>
      <TopNav />
      <S.Title>
        계좌 등록을 위해 보유하고 있는
        <br /> 계좌 정보를 입력해주세요
      </S.Title>
      <S.BoxWrap>
        <S.SelectBox
          $open={selectOpen}
          onClick={() => setSelectOpen(!selectOpen)}
        >
          <S.SelectHeader>
            <S.SelectBank>{bank}</S.SelectBank>
            <S.DownIcon
              $rotated={selectOpen}
              width={"1.5rem"}
              height={"1.5rem"}
            />
          </S.SelectHeader>
          <S.DropdownWrapper $open={selectOpen}>
            {BANKS.map((t) => (
              <S.DropdownItem
                key={t}
                onClick={(e) => {
                  e.stopPropagation();
                  setBank(t);
                  setSelectOpen(false);
                }}
              >
                <S.BankOption>{t}</S.BankOption>
              </S.DropdownItem>
            ))}
          </S.DropdownWrapper>
        </S.SelectBox>
        <S.InputBox>
          <S.InputLabel />
        </S.InputBox>
      </S.BoxWrap>
      <Button label="다음" onClick={() => navigate("/asset/account/2")} />
    </S.Account1Container>
  );
}
