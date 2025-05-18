import React from "react";
import SettingsCard from "@/components/main/settings/SettingsCard";
import * as S from "@/styles/main/settings/SettingsPageStyle";
import { ReactComponent as AccountCircle } from "@/assets/icons/account_circle.svg";
import { ReactComponent as LogOutIcon } from "@/assets/icons/logout.svg";
import { ReactComponent as DeleteIcon } from "@/assets/icons/delete.svg";
import { ReactComponent as ProfileIcon } from "@/assets/images/profile.svg";

const settings = [
  { icon: <AccountCircle />, label: "회원 정보" },
  { icon: <LogOutIcon />, label: "로그 아웃" },
  { icon: <DeleteIcon />, label: "회원 탈퇴" },
];

const SettingsPage = () => {
  return (
    <S.PageWrapper>
      <S.Left>
        <S.Title>
          <div>홍*동님</div>
          <div>안녕하세요!</div>
        </S.Title>
        <S.Phone>(+82) 10-1234-5678</S.Phone>
      </S.Left>

      <S.ProfileWrapper><ProfileIcon /></S.ProfileWrapper>

      <S.CardBox>
        {settings.map((c, idx) => (
          <SettingsCard
            key={idx}
            icon={c.icon}
            label={c.label}
          />
        ))}
      </S.CardBox>
    </S.PageWrapper>
  );
};

export default SettingsPage;
