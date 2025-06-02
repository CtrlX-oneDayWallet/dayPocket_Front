import SettingsCard from "@/components/main/settings/SettingsCard";
import * as S from "@/styles/main/settings/SettingsPageStyle";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as AccountCircle } from "@/assets/icons/account_circle.svg";
import { ReactComponent as LogOutIcon } from "@/assets/icons/logout.svg";
import { ReactComponent as DeleteIcon } from "@/assets/icons/delete.svg";
import { ReactComponent as ProfileIcon } from "@/assets/images/profile.svg";
import axiosInstance from "@/lib/axionsInstance";

const settings = [
  { icon: <AccountCircle />, label: "회원 정보" },
  { icon: <LogOutIcon />, label: "로그 아웃" },
  { icon: <DeleteIcon />, label: "회원 탈퇴" },
];

const SettingsPage = () => {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [data, setData] = useState({
    name: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/dayPocket/main/info`, {
          withCredentials: true,
        });
        console.log("응답데이터:", response.data);
        setData(response.data);
      } catch (err: any) {
        console.error(
          "요청 실패",
          err.response?.status,
          err.response?.data || err.message
        );
      }
    };

    fetchData();
  }, []);
  const handleCardClick = (label: string) => {
    if (label === "회원 정보") {
      navigate("/main/Userinfo");
    } else if (label === "로그 아웃") {
      setShowLogoutConfirm(true);
    } else if (label === "회원 탈퇴") {
      setShowDeleteConfirm(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleDeleteAccount = async () => {
    try {
      await fetch("/api/user/delete", { method: "DELETE" });
      navigate("/");
    } catch (err) {
      alert("회원 탈퇴에 실패했습니다.");
    }
  };

  return (
    <S.PageWrapper>
      <S.Left>
        <S.Title>
          <div>{data.name}님</div>
          <div>안녕하세요!</div>
        </S.Title>
        <S.Phone>(+82) {data.phoneNumber}</S.Phone>
      </S.Left>

      <S.ProfileWrapper>
        <ProfileIcon />
      </S.ProfileWrapper>

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
            <S.ModalTitle>로그아웃</S.ModalTitle>
            <S.ModalText>로그아웃 하시겠습니까?</S.ModalText>
            <S.ButtonGroup>
              <S.CancelButton onClick={() => setShowLogoutConfirm(false)}>
                취소
              </S.CancelButton>
              <S.ConfirmButton onClick={handleLogout}>확인</S.ConfirmButton>
            </S.ButtonGroup>
          </S.ModalContent>
        </S.Modal>
      )}

      {showDeleteConfirm && (
        <S.Modal>
          <S.ModalContent>
            <S.ModalTitle>회원탈퇴</S.ModalTitle>
            <S.ModalText>
              회원 탈퇴 시 모든 기록이 사라져요
              <br />
              그래도 탈퇴하시겠어요?
            </S.ModalText>
            <S.ButtonGroup>
              <S.CancelButton onClick={() => setShowDeleteConfirm(false)}>
                취소
              </S.CancelButton>
              <S.ConfirmButton onClick={handleDeleteAccount}>
                확인
              </S.ConfirmButton>
            </S.ButtonGroup>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.PageWrapper>
  );
};

export default SettingsPage;
