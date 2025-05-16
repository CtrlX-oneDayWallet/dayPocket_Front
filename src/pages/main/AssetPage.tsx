import React from "react";
import * as S from "../../styles/main/asset/AssetPageStyle";
import Gauge from "../../components/main/asset/Gauge";

const AssetPage = () => {
    const currentAmount = 0;

    return (
        <S.Container>
            <S.CurrentAmount>
                {currentAmount > 0 ? (
                    <>
                        현재 금액<br />
                        <strong>{currentAmount.toLocaleString()}원</strong>
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

                <Gauge percentage={25} />


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
