import React from "react";
import * as S from "../../styles/main/settings/SettingsPageStyle";

const SettingsPage = () => {
  return (
    <S.Container>
      <S.Greeting>홍*동님, 안녕하세요 👋</S.Greeting>

      <S.MenuList>
        <S.MenuItem>내 정보</S.MenuItem>
        <S.MenuItem>로그아웃</S.MenuItem>
        <S.MenuItem danger>회원 탈퇴</S.MenuItem>
      </S.MenuList>
    </S.Container>
  );
};

export default SettingsPage;
