import React from "react";
import SettingsCard from "@/components/main/settings/SettingsCard";
import * as S from "@/styles/main/settings/SettingsPageStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleCardClick = (label: string) => {
    if (label === "회원 정보") {
      navigate("/userinfo");
    }
    else if (label === "로그 아웃") {
      setShowLogoutConfirm(true);
    }
    else if (label === "회원 탈퇴") {
      setShowDeleteConfirm(true);
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  const handleDeleteAccount = async () => {
    try {
      await fetch("/api/user/delete", {method: "DELETE"});
      navigate("/");
    }
    catch (err) {
      alert("회원 탈퇴에 실패했습니다.");
    }
  };

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
            onClick={() => handleCardClick(c.label)}
          />
        ))}
      </S.CardBox>

      {showLogoutConfirm && (
        <S.Modal>
          <S.ModalContent>
            <p>로그아웃 하시겠습니까?</p>
            <button onClick={() => setShowLogoutConfirm(false)}>취소</button>
            <button onClick={handleLogout}>확인</button>
          </S.ModalContent>
        </S.Modal>
      )}

      {showDeleteConfirm && (
        <S.Modal>
          <S.ModalContent>
            <p>정말 탈퇴하시겠습니까</p>
            <button onClick={() => setShowDeleteConfirm(false)}>취소</button>
            <button onClick={handleDeleteAccount}>확인</button>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.PageWrapper>
  );
};

export default SettingsPage;
