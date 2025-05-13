import React from "react";
import ChallengeCard from "../../components/main/challenge/ChallengeCard";
import * as S from "../../styles/main/challenge/ChallengePageStyle";
import { ReactComponent as ReceiptIcon } from "../../assets/icons/receipt_long.svg";
import { ReactComponent as CarrotIcon } from "../../assets/icons/carrot.svg";
import { ReactComponent as QuizIcon } from "../../assets/icons/Quiz.svg";

const challenges = [
    { icon: <ReceiptIcon />, label: "소비 영수증 등록", reward: 100 },
    { icon: <CarrotIcon />, label: "중고거래 인증", reward: 500 },
    { icon: <QuizIcon />, label: "금융 지식 퀴즈", reward: 250 },
];

const ChallengePage = () => {
    return (
        <S.Container>
            <S.Title>챌린지를 성공하고<br />성실 온도를 올려볼까요?</S.Title>
            {challenges.map((c, idx) => (
                <ChallengeCard
                    key={idx}
                    icon={c.icon}
                    label={c.label}
                    reward={c.reward}
                />
            ))}
        </S.Container>
    );
};

export default ChallengePage;
