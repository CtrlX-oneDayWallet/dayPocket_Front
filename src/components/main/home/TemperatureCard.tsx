import React from "react";
import * as S from "../../../styles/main/home/TemperatureCardStyle";

const TemperatureCard = () => {
    return (
        <S.CardContainer>
            <S.Title>성실온도</S.Title>
            <S.Description>100℃ 달성하고 용돈 받기</S.Description>

            <S.Section>
                <S.Label>나의 온도</S.Label>
                <S.Row>
                    <S.Value color="#5F7DF8">76.5℃</S.Value>
                    <S.BarWrapper>
                        <S.Bar color="#5F7DF8" width={76.5} />
                    </S.BarWrapper>
                </S.Row>
            </S.Section>

            <S.Section>
                <S.Label>나의 자산</S.Label>
                <S.Row>
                    <S.Value color="#5BBEFF">5000원</S.Value>
                    <S.BarWrapper>
                        <S.Bar color="#5BBEFF" width={50} />
                    </S.BarWrapper>
                </S.Row>
            </S.Section>

            <S.GraphSection>
                <S.GraphBox>
                    <S.SubLabel>오늘의 최고 온도</S.SubLabel>
                    <S.Metric>홍*동님<br />76.5℃</S.Metric>
                    <S.Avg>평균 40℃</S.Avg>
                </S.GraphBox>
                <S.GraphBox>
                    <S.SubLabel>이번달 최고 금액</S.SubLabel>
                    <S.Metric>홍*동님<br />5000원</S.Metric>
                    <S.Avg>평균 2000원</S.Avg>
                </S.GraphBox>
            </S.GraphSection>
        </S.CardContainer>
    );
};

export default TemperatureCard;
