import React from "react";
import * as S from "../../../styles/main/challenge/ChallengeCardStyle";
import { ReactElement } from "react";

interface Props {
    icon: ReactElement;
    label: string;
    reward: number;
}

const ChallengeCard = ({ icon, label, reward }: Props) => {
    return (
        <S.Card>
            <S.Left>
                <S.IconWrapper>{icon}</S.IconWrapper>
                <S.Label>{label}</S.Label>
            </S.Left>
            <S.Reward>{reward}원</S.Reward>
        </S.Card>
    );
};

export default ChallengeCard;
