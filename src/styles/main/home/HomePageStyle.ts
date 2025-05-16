// src/styles/home/HomePageStyle.ts
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    padding: 20px;
    padding-bottom: 75px;

    @media screen and (max-width: 390px) {
        padding: 16px;
        padding-bottom: 65px;
    }
`;

export const ChallengeCTWrapper = styled.div`
    position: fixed;
    bottom: 72px;
    left: 20px;
    right: 20px;
    z-index: 100;

    @media screen and (max-width: 390px) {
        left: 12px;
        right: 12px;
        bottom: 60px;
    }
`;