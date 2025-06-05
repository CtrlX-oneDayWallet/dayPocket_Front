import * as S from "@/styles/userinfo/UserInformationPageStyle";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/lib/axionsInstance";
import { ReactComponent as BackIcon } from "@/assets/icons/arrow-back.svg";
import { ReactComponent as UserIcon } from "@/assets/icons/user.svg";
import { ReactComponent as DownIcon } from "@/assets/icons/arrow-down.svg";
import { ReactComponent as KoreaIcon } from "@/assets/icons/Asia.svg";
import { ReactComponent as BankIcon } from "@/assets/icons/BankIcon.svg";

const UserInformationPage = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        phoneNumber: "",
        bankAccountList: []
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(`/dayPocket/main/info`, {
                    withCredentials: true,
                });
                console.log("응답데이터:",response.data);
                setData(response.data);
            } catch (err: any) {
                console.error("요청 실패", err.response?.status, err.response?.data || err.message);
            }
        };
    
        fetchData();
    }, []);

    return (
        <>
            <S.Header>
                <S.BackButton onClick={() => navigate("/main/Settings")}>
                    <BackIcon />
                </S.BackButton>
            </S.Header>

            <S.Container>
                <S.Card>
                    <S.Label>이름</S.Label>
                    <S.InfoBox>
                        <UserIcon />
                        <S.InfoText>{data.name}</S.InfoText>
                    </S.InfoBox>

                    <S.Label>전화번호</S.Label>
                    <S.InfoBox>
                        <KoreaIcon />
                        <DownIcon />
                        <S.InfoText>{data.phoneNumber}</S.InfoText>
                    </S.InfoBox>

                    <S.Label>저장된 계좌정보</S.Label>
                    <S.InfoBox>
                        <DownIcon />
                        <S.InfoText>{data.bankAccountList}</S.InfoText>
                    </S.InfoBox>
                </S.Card>
            </S.Container>
        </>
    );
};

export default UserInformationPage;