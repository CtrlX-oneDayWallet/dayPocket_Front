import React from "react";
import * as S from "../../../styles/main/home/AssetSummaryStyle";

const AssetSummary = () => {
    return (
        <S.Container>
            <S.SummaryBox>
                <S.Label>오늘의 최고 온도</S.Label>
                <S.Metric>홍*동님</S.Metric>
                <S.Value>76.5℃</S.Value>
                <S.Average>평균 40℃</S.Average>
            </S.SummaryBox>

            <S.SummaryBox>
                <S.Label>이번달 최고 금액</S.Label>
                <S.Metric>홍*동님</S.Metric>
                <S.Value>5000원</S.Value>
                <S.Average>평균 2000원</S.Average>
            </S.SummaryBox>
        </S.Container>
    );
};

export default AssetSummary;
