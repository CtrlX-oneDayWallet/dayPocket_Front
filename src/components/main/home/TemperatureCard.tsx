import React from "react";
import * as S from "../../../styles/main/home/TemperatureCardStyle";
import { useTheme } from "styled-components";
import { ThemeType } from "@/styles/theme";

const TemperatureCard = () => {
    const theme = useTheme() as ThemeType;

    return (
        <S.CardContainer>
            <S.Title>성실온도</S.Title>
            <S.Description>100℃ 달성하고 용돈 받기</S.Description>
            <S.MetricSection>
                <S.MetricRow>
                    <S.LabelText color={theme.primary.pu1}>나의 온도</S.LabelText>
                    <S.ValueText color={theme.primary.pu1}>76.5°C</S.ValueText>
                </S.MetricRow>
                <S.BarBackground>
                    <S.Bar color={theme.primary.pu2} width={76.5} />
                </S.BarBackground>

                <S.MetricRow>
                    <S.LabelText color={theme.primary.bl1}>나의 자산</S.LabelText>
                    <S.ValueText color={theme.primary.bl1}>5000원</S.ValueText>
                </S.MetricRow>
                <S.BarBackground>
                    <S.Bar color="#B4E2FF" width={50} />
                </S.BarBackground>
            </S.MetricSection>

            <S.CardPairSection>
                <S.CardWrapper>
                    <S.CardTitle>오늘의 최고 온도</S.CardTitle>
                    <S.GraphWrapper>
                        <S.BarGraph height={76.5} color={theme.primary.pu1}>
                            <S.BarText color={theme.primary.pu1}>
                                <span>홍*동님</span>
                                <strong>76.5℃</strong>
                            </S.BarText>
                        </S.BarGraph>
                        <S.BarGraph height={40} color={theme.gray.gy3}>
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
                        <S.BarGraph height={50} color={theme.primary.bl1}>
                            <S.BarText color={theme.primary.bl1}>
                                <span>홍*동님</span>
                                <strong>5000원</strong>
                            </S.BarText>
                        </S.BarGraph>
                        <S.BarGraph height={20} color={theme.gray.gy3}>
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
