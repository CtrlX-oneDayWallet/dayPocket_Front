import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "@/styles/main/asset/AssetPageStyle";
import Gauge from "@/components/main/asset/Gauge";

const AssetPage = () => {
    const [data, setData] = useState({
        asset: 0,
        targetReceiptfiPoint: 0,
        receiptfiPoint: 0,
        processPoint: 0,
        leftPoint: 0,
        fiPoint: 0
        });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                console.log("저장된 토큰:", localStorage.getItem("token"));

                const response = await axios.get(`/api/dayPocket/main/asset`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
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
        <S.Container>
            <S.CurrentAmount>
                {data.asset > 0 ? (
                    <>
                        현재 금액<br />
                        <strong>{`${data.asset.toLocaleString()}원`}</strong>
                    </>
                ) : (
                    <>
                        현재 금액<br />
                        <span>다른 친구들은 벌써 5000원 받았어요<br />
                        챌린지 더 해서 용돈 벌어봐요 💸</span>
                    </>
                )}
            </S.CurrentAmount>

            <S.Card>
                <S.GoalHeader>
                    <S.CardTitle>이번달 목표</S.CardTitle>
                    <S.SettingButton>설정하기</S.SettingButton>
                </S.GoalHeader>

                <S.GaugeWrapper>
                    <Gauge percentage={data.processPoint} />
                </S.GaugeWrapper>


                <S.GoalDetail>
                    <div>인증 금액 <strong>{data.receiptfiPoint}원</strong></div>
                    <div>목표까지 남은 금액 <strong>{data.leftPoint}원</strong></div>
                </S.GoalDetail>
            </S.Card>

            <S.Card>
                <S.CardTitle>이번달 자산</S.CardTitle>
                <S.HoldingValue>
                    <div>보유 <strong>{data.fiPoint}원</strong></div>
                </S.HoldingValue>
                <S.DepositButton>입금하기</S.DepositButton>
            </S.Card>
        </S.Container>
    );
};

export default AssetPage;

