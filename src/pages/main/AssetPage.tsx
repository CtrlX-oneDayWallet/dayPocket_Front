import React from "react";
import * as S from "@/styles/main/asset/AssetPageStyle";
import Gauge from "@/components/main/asset/Gauge";

const AssetPage = () => {
    return (
        <S.Container>
            <S.CurrentAmount>
                현재 금액<br /><strong>6,757만원</strong>
            </S.CurrentAmount>

            <S.Card>
                <S.GoalHeader>
                    <S.CardTitle>이번달 목표</S.CardTitle>
                    <S.SettingButton>설정하기</S.SettingButton>
                </S.GoalHeader>

                <Gauge percentage={30} />

                <S.GoalDetail>
                    <div>인증 금액 <strong>0원</strong></div>
                    <div>목표까지 남은 금액 <strong>0원</strong></div>
                </S.GoalDetail>
            </S.Card>

            <S.Card>
                <S.CardTitle>이번달 자산</S.CardTitle>
                <S.HoldingValue>
                    <div>보유 <strong>5000원</strong></div>
                </S.HoldingValue>
                <S.DepositButton>입금하기</S.DepositButton>
            </S.Card>
        </S.Container>
    );
};

export default AssetPage;

