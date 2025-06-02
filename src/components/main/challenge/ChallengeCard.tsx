import React from "react";
import * as S from "../../../styles/main/challenge/ChallengeCardStyle";
import { ReactElement } from "react";

interface Props {
    icon: ReactElement;
    label: string;
    reward: number;
    onClick? : () => void;
}

const ChallengeCard = ({ icon, label, reward, onClick }: Props) => {
    return (
        <S.Card onClick={onClick}>
            <S.Left>
                <S.IconWrapper>{icon}</S.IconWrapper>
                <S.Label>{label}</S.Label>
            </S.Left>
            <S.Right>
                <S.Reward><span>{reward}</span><strong>원</strong></S.Reward>
            </S.Right>
        </S.Card>
    );
};

export default ChallengeCard;
