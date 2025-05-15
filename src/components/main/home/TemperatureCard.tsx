import React from "react";
import * as S from "../../../styles/main/home/TemperatureCardStyle";

const TemperatureCard = () => {
    return (
        <S.CardContainer>
            <S.Title>성실온도</S.Title>
            <S.Description>100℃ 달성하고 용돈 받기</S.Description>
            <S.MetricSection>
                <S.MetricRow>
                    <S.LabelText color="#7079F6">나의 온도</S.LabelText>
                    <S.ValueText color="#7079F6">76.5°C</S.ValueText>
                </S.MetricRow>
                <S.BarBackground>
                    <S.Bar color="#E7E9FD" width={76.5} />
                </S.BarBackground>

                <S.MetricRow>
                    <S.LabelText color="#70C3F6">나의 자산</S.LabelText>
                    <S.ValueText color="#70C3F6">5000원</S.ValueText>
                </S.MetricRow>
                <S.BarBackground>
                    <S.Bar color="#B4E2FF" width={50} />
                </S.BarBackground>
            </S.MetricSection>

            <S.CardPairSection>
                <S.CardWrapper>
                    <S.CardTitle>오늘의 최고 온도</S.CardTitle>
                    <S.GraphWrapper>
                        <S.BarGraph height={76.5} color="#7079F6">
                            <S.BarText color="#7079F6">
                                <span>홍*동님</span>
                                <strong>76.5℃</strong>
                            </S.BarText>
                        </S.BarGraph>
                        <S.BarGraph height={40} color="#B2B2B2">
                            <S.AvgBarText>
                                <span>평균</span>
                                <strong>40℃</strong>
                            </S.AvgBarText>
                        </S.BarGraph>
                    </S.GraphWrapper>
                </S.CardWrapper>

                <S.CardWrapper>
                    <S.CardTitle>이번달 최고 금액</S.CardTitle>
                    <S.GraphWrapper>
                        <S.BarGraph height={50} color="#70C3F6">
                            <S.BarText color="#70C3F6">
                                <span>홍*동님</span>
                                <strong>5000원</strong>
                            </S.BarText>
                        </S.BarGraph>
                        <S.BarGraph height={20} color="#B2B2B2">
                            <S.AvgBarText>
                                <span>평균</span>
                                <strong>2000원</strong>
                            </S.AvgBarText>
                        </S.BarGraph>
                    </S.GraphWrapper>
                </S.CardWrapper>
            </S.CardPairSection>

        </S.CardContainer>
    );
};

export default TemperatureCard;
