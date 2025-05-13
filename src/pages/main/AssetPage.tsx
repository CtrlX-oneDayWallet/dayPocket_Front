import React from "react";
import * as S from "../../styles/main/asset/AssetPageStyle";

const AssetPage = () => {
    return (
        <S.Container>
            <S.CurrentAmount>현재 금액<br /><strong>6,757만원</strong></S.CurrentAmount>

            <S.GoalCard>
                <S.GoalHeader>
                    <S.GoalTitle>이번달 목표</S.GoalTitle>
                    <S.SettingButton>설정하기</S.SettingButton>
                </S.GoalHeader>

                <S.GaugeWrapper>
                    <S.Gauge>0%</S.Gauge>
                </S.GaugeWrapper>

                <S.GoalDetail>
                    <div>인증 금액 <strong>0원</strong></div>
                    <div>목표까지 남은 금액 <strong>0원</strong></div>
                </S.GoalDetail>
            </S.GoalCard>

            <S.HoldingCard>
                <S.HoldingLabel>이번달 자산</S.HoldingLabel>
                <S.HoldingValue>보유 <strong>5000원</strong></S.HoldingValue>
                <S.DepositButton>입금하기</S.DepositButton>
            </S.HoldingCard>
        </S.Container>
    );
};

export default AssetPage;
