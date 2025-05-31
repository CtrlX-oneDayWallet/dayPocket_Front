import React from "react";
import * as S from "../../../styles/main/home/TodayQuizStyle";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow_downward.svg";
import { useNavigate } from "react-router-dom";

const TodayQuiz = () => {
    const navigate = useNavigate();

    return (
        <S.Card onClick={() => navigate("/main/Challenge")}>
            <S.Text>챌린지 하고 용돈을 벌어 볼까요?</S.Text>
            <S.ActionButton >
                <ArrowIcon width={28} height={28}/>
            </S.ActionButton>
        </S.Card>
    );
};

export default TodayQuiz;