import React from "react";
import DateHeader from "../../components/main/home/DateHeader";
import TemperatureCard from "../../components/main/home/TemperatureCard";
import AssetSummary from "../../components/main/home/AssetSummary";
import TodayQuiz from "../../components/main/home/TodayQuiz";
import * as S from "../../styles/main/home/HomePageStyle"

const HomePage = () => {
  return (
    <S.Container>
      <DateHeader />
      <TemperatureCard />
      <AssetSummary />
      <TodayQuiz />
    </S.Container>
  );
};

export default HomePage;