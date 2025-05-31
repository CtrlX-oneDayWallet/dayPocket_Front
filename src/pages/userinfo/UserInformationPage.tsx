import * as S from "@/styles/userinfo/UserInformationPageStyle";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/lib/axionsInstance";
import { ReactComponent as BackIcon } from "@/assets/icons/arrow-back.svg";
import { ReactComponent as UserIcon } from "@/assets/icons/user.svg";
import { ReactComponent as DownIcon } from "@/assets/icons/arrow-down.svg";
import { ReactComponent as KoreaIcon } from "@/assets/icons/Asia.svg";
import { ReactComponent as BankIcon } from "@/assets/icons/BankIcon.svg";

const UserInformationPage = ({ setActiveTab }: { setActiveTab: (tab: string) => void }) => {
    const [data, setData] = useState({
        name: "",
        phoneNumber: ""
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                //const token = localStorage.getItem("token");
                //console.log("저장된 토큰:", localStorage.getItem("token"));
    
                const response = await axiosInstance.get(`/dayPocket/main/info`, {
                    //headers: {
                    //    Authorization: `Bearer ${token}`,
                    //},
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
                <S.BackButton onClick={() => setActiveTab?.("settings")}>
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
                        <BankIcon />
                        <DownIcon />
                        <S.InfoText>110-****-123456</S.InfoText>
                    </S.InfoBox>
                </S.Card>
            </S.Container>
        </>
    );
};

export default UserInformationPage;