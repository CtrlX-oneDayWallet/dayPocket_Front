import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "../../../styles/main/home/TemperatureCardStyle";
import { useTheme } from "styled-components";
import { ThemeType } from "@/styles/theme";

const TemperatureCard = () => {
    const theme = useTheme() as ThemeType;

    const [data, setData] = useState({
        fiScore: 0,
        fiPoint: 0,
        dayMaxfiScore: 0,
        dayAvgfiScore: 0,
        dayMaxfiScoreName: "",
        maxFiPoint: 0,
        monthAvgfiPoint: 0,
        maxFiPointName: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                console.log("저장된 토큰:", localStorage.getItem("token"));

                const response = await axios.get(`/api/dayPocket/main/home`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                });
                console.log("응답데이터:",response.data);
                setData(response.data);
            } catch (err: any) {
                console.error("요청 실패", err.response?.status, err.response?.data || err.message);
            }
        };

        fetchData();
    }, []);

    return (
        <S.CardContainer>
            <S.Title>성실온도</S.Title>
            <S.Description>100℃ 달성하고 용돈 받기</S.Description>
            <S.MetricSection>
                <S.MetricRow>
                    <S.LabelText color={theme.primary.pu1}>나의 온도</S.LabelText>
                    <S.ValueText color={theme.primary.pu1}>{data.fiScore}°C</S.ValueText>
                </S.MetricRow>
                <S.BarBackground>
                    <S.Bar color={theme.primary.pu2} width={data.fiScore} />
                </S.BarBackground>

                <S.MetricRow>
                    <S.LabelText color={theme.primary.bl1}>나의 자산</S.LabelText>
                    <S.ValueText color={theme.primary.bl1}>{data.fiPoint}원</S.ValueText>
                </S.MetricRow>
                <S.BarBackground>
                    <S.Bar color="#B4E2FF" width={data.fiPoint} />
                </S.BarBackground>
            </S.MetricSection>

            <S.CardPairSection>
                <S.CardWrapper>
                    <S.CardTitle>오늘의 최고 온도</S.CardTitle>
                    <S.GraphWrapper>
                        <S.BarGraph height={data.dayMaxfiScore} color={theme.primary.pu1}>
                            <S.BarText color={theme.primary.pu1}>
                                <span>{data.dayMaxfiScoreName}님</span>
                                <strong>{data.dayMaxfiScore}℃</strong>
                            </S.BarText>
                        </S.BarGraph>
                        <S.BarGraph height={data.dayAvgfiScore} color={theme.gray.gy3}>
                            <S.AvgBarText>
                                <span>평균</span>
                                <strong>{data.dayAvgfiScore}℃</strong>
                            </S.AvgBarText>
                        </S.BarGraph>
                    </S.GraphWrapper>
                </S.CardWrapper>

                <S.CardWrapper>
                    <S.CardTitle>이번달 최고 금액</S.CardTitle>
                    <S.GraphWrapper>
                        <S.BarGraph height={data.maxFiPoint} color={theme.primary.bl1}>
                            <S.BarText color={theme.primary.bl1}>
                                <span>{data.maxFiPointName}님</span>
                                <strong>{data.maxFiPoint}원</strong>
                            </S.BarText>
                        </S.BarGraph>
                        <S.BarGraph height={data.monthAvgfiPoint} color={theme.gray.gy3}>
                            <S.AvgBarText>
                                <span>평균</span>
                                <strong>{data.monthAvgfiPoint}원</strong>
                            </S.AvgBarText>
                        </S.BarGraph>
                    </S.GraphWrapper>
                </S.CardWrapper>
            </S.CardPairSection>

        </S.CardContainer>
    );
};

export default TemperatureCard;
