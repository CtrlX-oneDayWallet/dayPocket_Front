import React from "react";
import * as S from "../../../styles/main/home/DateHeaderStyle";

const DateHeader = () => {
    const today = new Date().toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "short",
    });

    return <S.DateText>{today}</S.DateText>;
};

export default DateHeader;

