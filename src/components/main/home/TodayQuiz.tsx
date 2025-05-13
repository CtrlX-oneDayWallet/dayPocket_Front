import React from "react";
import * as S from "../../../styles/main/home/TodayQuizStyle";

const TodayQuiz = () => {
    return (
        <S.Card>
            <S.Text>챌린지 하고 용돈을 벌어 볼까요?</S.Text>
            <S.ActionButton>
                <S.Arrow>→</S.Arrow>
            </S.ActionButton>
        </S.Card>
    );
};

export default TodayQuiz;