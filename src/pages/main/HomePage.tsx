import React from "react";
import DateHeader from "../../components/main/home/DateHeader";
import TemperatureCard from "../../components/main/home/TemperatureCard";
import TodayQuiz from "../../components/main/home/TodayQuiz";
import * as S from "../../styles/main/home/HomePageStyle";

const HomePage = () => {
  return (
    <S.Container>
      <DateHeader />
      <TemperatureCard />
      <TodayQuiz />
    </S.Container>
  );
};

export default HomePage;